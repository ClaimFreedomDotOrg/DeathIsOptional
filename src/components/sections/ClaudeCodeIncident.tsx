import { motion } from "framer-motion";
import { AlertOctagon, Shield } from "lucide-react";

export function ClaudeCodeIncident() {
  return (
    <section className="py-24 px-4 bg-[#1a0a0b] border-y border-forge-red/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertOctagon size={24} className="text-forge-red" />
            <span className="text-forge-red font-mono text-sm uppercase tracking-widest">
              March 31, 2026
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-forge-white mb-6">
            The Incident That Changed{" "}
            <span className="text-forge-red">Everything</span>
          </h2>
          <p className="text-xl text-forge-white/70 max-w-3xl mx-auto leading-relaxed">
            Anthropic accidentally published{" "}
            <span className="text-forge-red font-bold">
              513,000 lines of unobfuscated TypeScript
            </span>{" "}
            in npm package{" "}
            <code className="font-mono text-forge-amber bg-forge-steel/50 px-1.5 py-0.5 rounded text-sm">
              @anthropic-ai/claude-code@2.1.88
            </code>{" "}
            — exposing 1,906 files of production security internals.
          </p>
        </motion.div>

        {/* Root cause callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-xl border border-forge-red/40 bg-forge-red/5 p-6 mb-8 font-mono text-sm"
        >
          <div className="text-forge-red font-bold mb-3 uppercase tracking-wide text-xs">
            Root Cause
          </div>
          <p className="text-forge-white/80 leading-relaxed">
            Bun's default source map generation produced a{" "}
            <span className="text-forge-red font-bold">59.8 MB .map file</span>.
            npm's permissive packaging allowed it to ship. The{" "}
            <code className="text-forge-amber">.npmignore</code> wasn't
            configured to exclude{" "}
            <code className="text-forge-amber">*.map</code> files. That's it.
            One oversight. 513,000 lines publicly downloadable from Cloudflare
            R2.
          </p>
        </motion.div>

        {/* Impact bullets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-xl border border-forge-steel/30 bg-forge-steel/10 p-6 mb-8"
        >
          <h3 className="font-bold text-forge-white mb-4">Impact</h3>
          <ul className="space-y-3">
            {[
              "Within hours: mirrored on GitHub, accumulating thousands of stars",
              "Security internals, unreleased features, permission validators — all exposed",
              "Threat actors immediately created trojanized repos distributing Vidar info-stealing malware",
              "A critical vulnerability was discovered: Claude Code's security analysis bypassed for commands with 50+ subcommands",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-forge-white/70 text-sm"
              >
                <span className="text-forge-red font-bold mt-0.5">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Anthropic quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-l-4 border-forge-slate/50 pl-6 mb-10 italic text-forge-slate"
        >
          "No sensitive customer data or credentials were involved. This was a
          release packaging issue caused by human error."
          <footer className="mt-2 text-forge-slate/70 text-sm not-italic">
            — Anthropic official statement
          </footer>
        </motion.blockquote>

        {/* Forge response */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="rounded-xl border border-forge-green/30 bg-forge-green/5 p-6 flex items-start gap-4"
        >
          <Shield size={24} className="text-forge-green flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-forge-green font-bold mb-2">
              Foundry doesn't let this happen.
            </div>
            <p className="text-forge-white/70 text-sm leading-relaxed">
              The Forge compiler controls exactly what ships. Cryptographic
              identity. Content-addressed packages. No surprise .map files. No
              arbitrary packaging accidents. The compiler owns the output
              manifest — not a config file that someone forgot to update.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
