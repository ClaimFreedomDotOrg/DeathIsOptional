import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Folder, Package, AlertCircle } from "lucide-react";

function DepTreeBefore() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-xl border border-forge-red/20 bg-forge-iron p-5 font-mono text-sm">
      <div className="text-forge-slate text-xs mb-3 uppercase tracking-wide">
        package.json — direct deps
      </div>
      <div className="space-y-1 text-forge-white/80">
        {["react", "next", "axios", "lodash", "typescript"].map((dep) => (
          <div key={dep} className="text-forge-green">
            &quot;{dep}&quot;: &quot;^latest&quot;
          </div>
        ))}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 flex items-center gap-2 text-forge-amber text-xs hover:text-forge-orange transition-colors"
      >
        <ChevronDown
          size={14}
          className={`transition-transform ${expanded ? "rotate-180" : ""}`}
        />
        {expanded ? "Collapse" : "Expand full tree..."}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mt-3"
          >
            <div className="text-forge-slate text-xs space-y-1 border-t border-forge-steel/30 pt-3">
              <div className="text-forge-red mb-2">
                ▶ 47 total packages resolved
              </div>
              <div className="text-forge-red mb-2">
                ▶ 6 unique maintainers (6 keys to steal)
              </div>
              <div className="space-y-0.5">
                {[
                  "react@18.3.1",
                  "react-dom@18.3.1",
                  "next@13.5.6",
                  "axios@1.6.0",
                  "lodash@4.17.21",
                  "typescript@5.3.3",
                  "webpack@5.89.0",
                  "webpack-cli@5.1.4",
                  "postcss@8.4.32",
                  "autoprefixer@10.4.16",
                  "tailwindcss@3.4.0",
                  "...36 more transitive dependencies",
                ].map((p, i) => (
                  <div
                    key={i}
                    className={`pl-2 ${p.startsWith("...") ? "text-forge-red" : ""}`}
                  >
                    {p}
                  </div>
                ))}
              </div>
              <div className="mt-3 p-2 rounded bg-forge-red/10 border border-forge-red/20 text-forge-red">
                <div className="flex items-center gap-2 mb-1">
                  <AlertCircle size={12} />
                  <span className="font-bold">npm WARN peer dep missing</span>
                </div>
                <div>react@18.x, required by next@13.x but got 18.3.1</div>
                <div>
                  webpack@5.x conflicts with webpack@4 (required by webpack-cli)
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-3 text-xs text-forge-red/70">
              <Folder size={12} />
              <span>node_modules/</span>
              <span className="text-forge-red font-bold">
                847 packages · 200MB
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DepTreeAfter() {
  return (
    <div className="rounded-xl border border-forge-green/20 bg-forge-iron p-5 font-mono text-sm">
      <div className="text-forge-slate text-xs mb-3 uppercase tracking-wide">
        forge build output
      </div>
      <div className="space-y-1">
        <div className="text-forge-green">✓ Compiled in 0.8s</div>
        <div className="text-forge-green">✓ Dead code eliminated</div>
        <div className="text-forge-green">✓ Deduplication complete</div>
        <div className="text-forge-green">✓ Single-pass done</div>
      </div>
      <div className="mt-4 border-t border-forge-steel/30 pt-3">
        <div className="text-forge-slate text-xs mb-2">Output:</div>
        <div className="flex items-center gap-2 text-forge-white">
          <Package size={14} className="text-forge-green" />
          <span>dist/app</span>
          <span className="text-forge-green font-bold ml-auto">
            1 binary · 2.1MB
          </span>
        </div>
        <div className="mt-2 text-forge-green/60 text-xs">
          0 node_modules · 0 peer dep warnings · 0 vulnerabilities
        </div>
      </div>
    </div>
  );
}

export function DependencyHell() {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <section className="py-24 px-4 bg-forge-iron">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-forge-red font-mono text-sm uppercase tracking-widest">
            Dependency Hell
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-forge-white mt-3 mb-4">
            5 packages in.{" "}
            <span className="text-forge-red">847 packages out.</span>
          </h2>
          <p className="text-forge-slate max-w-2xl mx-auto text-lg">
            npm doesn't solve dependency management. It defers it — to 3am
            production incidents, peer dep warnings, and security advisories you
            can't action.
          </p>
        </motion.div>

        {/* Before/after toggle */}
        <div className="mb-12">
          <div className="flex justify-center mb-6">
            <div className="flex rounded-lg overflow-hidden border border-forge-steel/40">
              <button
                onClick={() => setShowAfter(false)}
                className={`px-5 py-2 text-sm font-semibold transition-colors ${
                  !showAfter
                    ? "bg-forge-red/20 text-forge-red border-r border-forge-steel/40"
                    : "text-forge-slate hover:text-forge-white border-r border-forge-steel/40"
                }`}
              >
                npm reality
              </button>
              <button
                onClick={() => setShowAfter(true)}
                className={`px-5 py-2 text-sm font-semibold transition-colors ${
                  showAfter
                    ? "bg-forge-green/20 text-forge-green"
                    : "text-forge-slate hover:text-forge-white"
                }`}
              >
                Forge output
              </button>
            </div>
          </div>
          <AnimatePresence mode="wait">
            {!showAfter ? (
              <motion.div
                key="before"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <DepTreeBefore />
              </motion.div>
            ) : (
              <motion.div
                key="after"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <DepTreeAfter />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Compiler answer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-forge-orange/30 bg-forge-orange/5 p-8 mb-12 text-center"
        >
          <p className="text-2xl md:text-3xl font-bold text-forge-white mb-4 leading-tight">
            "If a library compiles against the Forge compiler at version X —
            it's compatible with your code.{" "}
            <span className="text-forge-orange">Period.</span>"
          </p>
          <p className="text-forge-slate max-w-2xl mx-auto">
            No peer dep ranges. No version negotiation. The compiler validates
            compatibility at compile time. Incompatibilities are compile errors,
            not 3am production incidents.
          </p>
        </motion.div>

        {/* Compiler superpowers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Automatic dead code elimination",
              body: "Import one function from a 50KB library? You get one function in your output. The compiler sees everything.",
              accent: "border-forge-orange/30 bg-forge-orange/5",
              label: "text-forge-orange",
            },
            {
              title: "Automatic deduplication",
              body: "Same logic imported from 5 different paths? One copy in the binary. The compiler owns the whole graph.",
              accent: "border-forge-amber/30 bg-forge-amber/5",
              label: "text-forge-amber",
            },
            {
              title: "Single-pass compilation",
              body: "Parse → analyze → transform → bundle → emit. One pass. No Webpack plugin chain. No Babel → ESBuild → Rollup handoffs. No intermediate AST artifacts.",
              accent: "border-forge-green/30 bg-forge-green/5",
              label: "text-forge-green",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-xl border p-6 ${item.accent}`}
            >
              <h3 className={`font-bold mb-2 ${item.label}`}>{item.title}</h3>
              <p className="text-forge-white/60 text-sm leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
