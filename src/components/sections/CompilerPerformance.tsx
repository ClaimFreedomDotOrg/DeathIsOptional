import { motion } from "framer-motion";
import { BUILD_TIMES } from "@/domain/marketing";
import { Zap, Layers, Activity, Box } from "lucide-react";

const MAX_SECONDS = 45;

export function CompilerPerformance() {
  return (
    <section className="py-24 px-4 bg-forge-steel/10 border-y border-forge-steel/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-forge-orange font-mono text-sm uppercase tracking-widest">
            Performance
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-forge-white mt-3 mb-4">
            <span className="text-forge-orange">56x</span> faster than Webpack.
          </h2>
          <p className="text-forge-slate max-w-2xl mx-auto">
            Not a benchmark trick. Single-pass Rust compilation from source to
            binary. No plugin chains, no intermediate tools.
          </p>
        </motion.div>

        {/* Build time bars */}
        <div className="space-y-4 mb-16 max-w-3xl mx-auto">
          {BUILD_TIMES.map((bt, i) => (
            <motion.div
              key={bt.tool}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-36 text-sm text-forge-white/70 text-right font-mono flex-shrink-0">
                {bt.tool}
              </div>
              <div className="flex-1 relative h-10 bg-forge-steel/20 rounded-lg overflow-hidden border border-forge-steel/30">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${(bt.seconds / MAX_SECONDS) * 100}%`,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.1 + 0.2,
                    ease: "easeOut",
                  }}
                  className="absolute inset-y-0 left-0 flex items-center justify-end px-3 rounded-lg min-w-[60px]"
                  style={{
                    backgroundColor: bt.color + "30",
                    borderRight: `2px solid ${bt.color}`,
                  }}
                />
                <div className="absolute inset-0 flex items-center px-3">
                  <span
                    className="text-sm font-bold font-mono"
                    style={{ color: bt.color }}
                  >
                    {bt.seconds}s
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Callout cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <Zap size={20} />,
              title: "Oxc Parser",
              body: "Written in Rust. 50-100x faster than Babel. 3-5x faster than SWC. The fastest JavaScript parser available.",
              color: "text-forge-orange",
              border: "border-forge-orange/20 bg-forge-orange/5",
            },
            {
              icon: <Layers size={20} />,
              title: "Single-pass",
              body: "Parse once. Emit once. No tool hand-offs, no intermediate representations, no AST serialization overhead.",
              color: "text-forge-amber",
              border: "border-forge-amber/20 bg-forge-amber/5",
            },
            {
              icon: <Activity size={20} />,
              title: "TC39 Signals",
              body: "No virtual DOM. No diffing. No reconciler. Reactive primitives compiled directly to minimal DOM operations.",
              color: "text-forge-green",
              border: "border-forge-green/20 bg-forge-green/5",
            },
            {
              icon: <Box size={20} />,
              title: "Zero-dependency binary",
              body: "forge build → one self-contained executable. V8 embedded via deno_core. Deploy with scp.",
              color: "text-blue-400",
              border: "border-blue-400/20 bg-blue-400/5",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-xl border p-6 flex items-start gap-4 ${card.border}`}
            >
              <div className={`flex-shrink-0 mt-0.5 ${card.color}`}>
                {card.icon}
              </div>
              <div>
                <h3 className={`font-bold mb-1 ${card.color}`}>{card.title}</h3>
                <p className="text-forge-white/60 text-sm leading-relaxed">
                  {card.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
