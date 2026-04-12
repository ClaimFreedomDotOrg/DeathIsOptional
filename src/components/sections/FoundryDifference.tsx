import { motion } from "framer-motion";
import { FOUNDRY_COMPARISON } from "@/domain/marketing";
import { X, Check } from "lucide-react";

export function FoundryDifference() {
  return (
    <section className="py-24 px-4 bg-forge-steel/10 border-y border-forge-steel/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-forge-green font-mono text-sm uppercase tracking-widest">
            The Solution
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-forge-white mt-3 mb-4">
            Foundry vs. <span className="text-forge-red">npm</span>
          </h2>
          <p className="text-forge-slate max-w-2xl mx-auto">
            A package registry built for security from first principles — not
            retrofitted onto a foundation of trust-on-install.
          </p>
        </motion.div>

        {/* Header labels */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 mb-4 px-4">
          <div className="text-forge-slate text-sm font-semibold uppercase tracking-wide">
            Dimension
          </div>
          <div className="text-forge-red text-sm font-semibold uppercase tracking-wide flex items-center gap-2">
            <X size={14} /> npm
          </div>
          <div className="text-forge-green text-sm font-semibold uppercase tracking-wide flex items-center gap-2">
            <Check size={14} /> Foundry
          </div>
        </div>

        <div className="space-y-3">
          {FOUNDRY_COMPARISON.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 rounded-xl overflow-hidden"
            >
              {/* Dimension */}
              <div className="bg-forge-steel/20 border border-forge-steel/30 px-4 py-3 rounded-xl md:rounded-r-none md:rounded-l-xl flex items-center">
                <span className="text-forge-white font-semibold text-sm">
                  {row.dimension}
                </span>
              </div>
              {/* npm */}
              <div className="bg-forge-red/5 border border-forge-red/20 px-4 py-3 rounded-xl md:rounded-none flex items-center gap-2">
                <X size={14} className="text-forge-red flex-shrink-0" />
                <span className="text-forge-white/60 text-sm">{row.npm}</span>
              </div>
              {/* Foundry */}
              <div className="bg-forge-green/5 border border-forge-green/20 px-4 py-3 rounded-xl md:rounded-l-none md:rounded-r-xl flex items-center gap-2">
                <Check size={14} className="text-forge-green flex-shrink-0" />
                <span className="text-forge-green/90 text-sm font-medium">
                  {row.foundry}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
