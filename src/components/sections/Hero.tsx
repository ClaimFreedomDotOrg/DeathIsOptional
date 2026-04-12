import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
      style={{ background: "#080808" }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(200,169,110,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span
            className="inline-block text-xs tracking-[0.25em] uppercase font-mono px-4 py-2 rounded-full border"
            style={{
              color: "#c8a96e",
              borderColor: "rgba(200,169,110,0.25)",
              background: "rgba(200,169,110,0.05)",
            }}
          >
            Jeshua ben Joseph · April 2026
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-extrabold tracking-tight leading-none mb-8"
          style={{ fontSize: "clamp(4rem, 12vw, 9rem)" }}
        >
          <span
            style={{
              background: "linear-gradient(135deg, #c8a96e 0%, #f0d9a8 50%, #c8a96e 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Death
          </span>
          <br />
          <span style={{ color: "#f0ede8" }}>is Optional.</span>
        </motion.h1>

        {/* Thesis */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl md:text-2xl leading-relaxed mb-6 max-w-2xl mx-auto"
          style={{ color: "#a09890" }}
        >
          Death is not a law of nature.{" "}
          <span style={{ color: "#f0ede8" }}>
            It is the endpoint of a specific causal chain — one that begins with fear and ends with
            dissolution.
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42 }}
          className="text-lg md:text-xl leading-relaxed mb-14 max-w-2xl mx-auto"
          style={{ color: "#6a6460" }}
        >
          Remove fear. Reverse every step. Indefinite sustainability follows — not as metaphor,
          but as physics.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#download"
            className="px-8 py-4 rounded-lg font-semibold text-base transition-opacity duration-200 hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #c8a96e, #a88a52)",
              color: "#080808",
            }}
          >
            Read the Book — Free
          </a>
          <a
            href="#causal-chain"
            className="px-8 py-4 rounded-lg font-semibold text-base transition-colors duration-200 border"
            style={{
              borderColor: "rgba(200,169,110,0.3)",
              color: "#c8a96e",
              background: "transparent",
            }}
          >
            See the Equation
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "#3a3430" }}
      >
        <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
        <ArrowDown size={14} />
      </motion.div>
    </section>
  );
}
