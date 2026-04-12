import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
}

function highlightCode(code: string, language: string): string {
  if (language === "bash" || language === "shell") {
    return code
      .replace(/^(\$\s)/gm, '<span class="text-forge-amber">$1</span>')
      .replace(/(#[^\n]*)/g, '<span class="text-forge-slate italic">$1</span>')
      .replace(
        /(forge|npm|bun|node|npx|cd|mkdir)/g,
        '<span class="text-forge-orange">$1</span>',
      )
      .replace(/(✓|⚡)/g, '<span class="text-forge-green">$1</span>');
  }

  if (language === "typescript" || language === "javascript") {
    return code
      .replace(
        /(\/\/[^\n]*)/g,
        '<span class="text-forge-slate italic">$1</span>',
      )
      .replace(
        /\b(import|export|from|const|let|var|function|async|await|return|if|else|class|interface|type|extends|implements|new|this|typeof|keyof|readonly|default|as)\b/g,
        '<span class="text-purple-400">$1</span>',
      )
      .replace(
        /\b(string|number|boolean|null|undefined|void|never|any|unknown|Promise|User)\b/g,
        '<span class="text-blue-400">$1</span>',
      )
      .replace(/(@\w+)/g, '<span class="text-forge-amber font-bold">$1</span>')
      .replace(/(\$\w+)/g, '<span class="text-forge-green">$1</span>')
      .replace(
        /("[^"]*"|'[^']*'|`[^`]*`)/g,
        '<span class="text-green-400">$1</span>',
      )
      .replace(
        /\b(\d+(\.\d+)?)\b/g,
        '<span class="text-forge-orange">$1</span>',
      );
  }

  if (language === "json") {
    return code
      .replace(/("[^"]*")(\s*:)/g, '<span class="text-blue-400">$1</span>$2')
      .replace(/:\s*("[^"]*")/g, ': <span class="text-green-400">$1</span>')
      .replace(
        /:\s*(\d+(\.\d+)?)/g,
        ': <span class="text-forge-orange">$1</span>',
      )
      .replace(
        /:\s*(true|false|null)/g,
        ': <span class="text-purple-400">$1</span>',
      );
  }

  return code;
}

export function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    void navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const highlighted = highlightCode(code, language);

  return (
    <div className="rounded-lg overflow-hidden border border-forge-steel/50 font-mono text-sm">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-forge-steel/80 border-b border-forge-steel/50">
        <div className="flex items-center gap-3">
          {filename && (
            <span className="text-forge-white/70 text-xs">{filename}</span>
          )}
          <span className="text-forge-slate text-xs uppercase tracking-wider">
            {language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-forge-slate hover:text-forge-white transition-colors px-2 py-1 rounded hover:bg-forge-iron/50"
        >
          {copied ? (
            <>
              <Check size={12} className="text-forge-green" />
              <span className="text-forge-green">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={12} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      {/* Code body */}
      <div className="bg-forge-iron p-4 overflow-x-auto">
        <pre
          className="text-forge-white/90 leading-relaxed whitespace-pre"
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      </div>
    </div>
  );
}
