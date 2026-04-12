import { motion } from "framer-motion";
import { Star, BookOpen, MessageCircle, Hammer } from "lucide-react";

export function EarlyAccess() {
  return (
    <section
      id="get-started"
      className="py-32 px-4 relative overflow-hidden bg-forge-iron"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-forge-orange/10 via-forge-iron to-forge-rust/10 pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] rounded-full bg-forge-orange/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="p-3 rounded-2xl bg-forge-orange/20 border border-forge-orange/40">
              <Hammer size={32} className="text-forge-orange" />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-forge-white mb-4">
            Start{" "}
            <span className="bg-gradient-to-r from-forge-orange to-forge-amber bg-clip-text text-transparent">
              forging.
            </span>
          </h2>
          <p className="text-forge-slate text-xl">
            Open source. Pre-alpha. Contributions welcome.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://github.com/100monkeys-ai/forgejs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-forge-orange hover:bg-forge-rust font-semibold text-white transition-colors shadow-lg shadow-forge-orange/20 text-sm"
          >
            <Star size={16} />
            Star on GitHub
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-forge-steel/50 text-forge-white/80 hover:text-forge-white hover:border-forge-slate/70 transition-colors text-sm"
          >
            <BookOpen size={16} />
            Read the Docs
          </a>
          <a
            href="https://discord.100monkeys.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-forge-steel/50 text-forge-white/80 hover:text-forge-white hover:border-forge-slate/70 transition-colors text-sm"
          >
            <MessageCircle size={16} className="text-blue-400" />
            Discord
          </a>
        </motion.div>
      </div>
    </section>
  );
}
