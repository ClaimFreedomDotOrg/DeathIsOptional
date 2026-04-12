import { motion } from "framer-motion";
import { AnimatedTerminal } from "@/components/shared/AnimatedTerminal";
import { Check, X } from "lucide-react";

const TERMINAL_LINES = [
  "$ forge new my-app",
  "",
  "  Forging project: my-app",
  "  ✓ Scaffold complete (0.3s)",
  "",
  "$ cd my-app && forge dev",
  "",
  "  ⚡ Forge compiler ready",
  "  ✓ Compiled in 0.8s",
  "  ✓ Server: http://localhost:3000",
  "  ✓ HMR ready",
  "",
  "  0 npm packages installed",
  "  0 peer dep warnings",
  "  0 security vulnerabilities",
];

const COMPARISON = [
  {
    tool: "npx create-next-app@latest",
    packages: "847 packages",
    time: "4.2 minutes",
    warnings: "12 peer dep warnings",
    danger: true,
  },
  {
    tool: "forge new my-app",
    packages: "0 packages",
    time: "0.3 seconds",
    warnings: "0 warnings",
    danger: false,
  },
];

export function QuickStart() {
  return (
    <section className="py-24 px-4 bg-forge-steel/10 border-y border-forge-steel/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-forge-orange font-mono text-sm uppercase tracking-widest">
            Quick Start
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-forge-white mt-3 mb-4">
            Zero to running in{" "}
            <span className="text-forge-green">0.3 seconds.</span>
          </h2>
          <p className="text-forge-slate max-w-xl mx-auto">
            No package managers. No scaffolding pipelines. No waiting.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <AnimatedTerminal lines={TERMINAL_LINES} speed={35} />
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden border border-forge-steel/30 overflow-x-auto"
        >
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-forge-steel/40">
                <th className="text-left px-5 py-3 text-forge-slate font-semibold uppercase tracking-wide text-xs">
                  Tool
                </th>
                <th className="text-center px-4 py-3 text-forge-slate font-semibold uppercase tracking-wide text-xs">
                  Packages
                </th>
                <th className="text-center px-4 py-3 text-forge-slate font-semibold uppercase tracking-wide text-xs">
                  Time
                </th>
                <th className="text-center px-4 py-3 text-forge-slate font-semibold uppercase tracking-wide text-xs">
                  Warnings
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row, i) => (
                <tr
                  key={i}
                  className={`border-t border-forge-steel/20 ${i % 2 === 0 ? "bg-forge-steel/5" : ""}`}
                >
                  <td className="px-5 py-4">
                    <code
                      className={`font-mono text-xs ${row.danger ? "text-forge-white/60" : "text-forge-orange"}`}
                    >
                      {row.tool}
                    </code>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span
                      className={`font-mono text-sm font-bold ${row.danger ? "text-forge-red" : "text-forge-green"}`}
                    >
                      {row.packages}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span
                      className={`font-mono text-sm font-bold ${row.danger ? "text-forge-red" : "text-forge-green"}`}
                    >
                      {row.time}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      {row.danger ? (
                        <X size={14} className="text-forge-red" />
                      ) : (
                        <Check size={14} className="text-forge-green" />
                      )}
                      <span
                        className={`font-mono text-sm ${row.danger ? "text-forge-red" : "text-forge-green"}`}
                      >
                        {row.warnings}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
