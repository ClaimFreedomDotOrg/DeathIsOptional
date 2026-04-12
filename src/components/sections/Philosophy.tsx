import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section className="py-32 px-4 bg-forge-steel/10 border-y border-forge-steel/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="text-forge-slate font-mono text-sm uppercase tracking-widest">
            Philosophy
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-8 text-xl md:text-2xl leading-relaxed"
        >
          <p className="text-forge-white/70">
            <span className="text-forge-white font-bold">Rails</span> taught us
            that opinions aren't limitations — they're leverage. When everyone
            uses the same router, the same ORM, the same auth flow, you spend
            time building products, not arguing about architecture.
          </p>

          <p className="text-forge-white/70">
            <span className="text-forge-red font-bold">npm</span> taught us the
            opposite. Choice without curation is chaos. 3,000 auth libraries.
            500 HTTP clients. Semver ranges that technically resolve but subtly
            don't. A million maintainers, a million keys to steal.
          </p>

          <p className="text-forge-white/70">
            <span className="text-forge-orange font-bold">Forge</span> is the
            synthesis.
          </p>

          <div className="h-px bg-gradient-to-r from-transparent via-forge-steel/60 to-transparent my-8" />

          <p className="text-forge-white/70">
            The speed of Rust. The discipline of Rails. A security model built
            from first principles — not retrofitted onto a foundation of{" "}
            <code className="font-mono text-forge-red bg-forge-steel/50 px-1.5 py-0.5 rounded text-lg">
              npm install
            </code>{" "}
            scripts and semver prayer.
          </p>

          <div className="h-px bg-gradient-to-r from-transparent via-forge-steel/60 to-transparent my-8" />

          <p className="text-forge-white/60 text-lg">
            One compiler. One contract. One binary.
          </p>

          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-forge-orange via-forge-amber to-forge-orange bg-clip-text text-transparent mt-8"
          >
            Forged, not assembled.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
