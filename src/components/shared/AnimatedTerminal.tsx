import { useEffect, useRef, useState } from "react";

interface AnimatedTerminalProps {
  lines: string[];
  speed?: number;
}

export function AnimatedTerminal({ lines, speed = 40 }: AnimatedTerminalProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    intervalRef.current = setInterval(() => {
      const line = lines[currentLine];

      if (currentChar < line.length) {
        setDisplayedLines((prev) => {
          const next = [...prev];
          while (next.length <= currentLine) next.push("");
          next[currentLine] = (next[currentLine] ?? "") + line[currentChar];
          return next;
        });
        setCurrentChar((c) => c + 1);
      } else {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setTimeout(() => {
          setCurrentLine((l) => l + 1);
          setCurrentChar(0);
        }, speed);
      }
    }, speed);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentLine, currentChar, lines, speed]);

  function getLineColor(line: string | undefined): string {
    if (!line) return "text-forge-white/80";
    if (line.startsWith("$")) return "text-forge-amber";
    if (line.includes("✓") || line.includes("ready")) return "text-forge-green";
    if (line.startsWith("  ⚡") || line.startsWith("  Forging"))
      return "text-forge-orange";
    if (
      line.includes("0 npm") ||
      line.includes("0 peer") ||
      line.includes("0 security")
    )
      return "text-forge-green";
    return "text-forge-white/80";
  }

  return (
    <div className="rounded-xl overflow-hidden border border-forge-steel/60 font-mono text-sm shadow-2xl">
      {/* macOS-style dots */}
      <div className="flex items-center gap-2 px-4 py-3 bg-forge-steel/80 border-b border-forge-steel/50">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-forge-slate text-xs">forge terminal</span>
      </div>
      {/* Terminal body */}
      <div className="bg-[#0d0f1a] p-6 min-h-[200px]">
        {displayedLines.map((line, i) => (
          <div key={i} className={`leading-relaxed ${getLineColor(line)}`}>
            {line || "\u00a0"}
          </div>
        ))}
        {currentLine < lines.length && (
          <div className="inline-block w-2 h-4 bg-forge-orange animate-pulse ml-0.5" />
        )}
      </div>
    </div>
  );
}
