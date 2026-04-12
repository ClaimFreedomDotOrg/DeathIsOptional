import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

// PLACEHOLDER: Replace with actual infographic paths when uploaded
// Example: { src: "/infographics/fear-cascade.png", caption: "The Fear Cascade" }
const INFOGRAPHICS: { src: string; caption: string }[] = [];

export function InfographicsSection() {
  const [current, setCurrent] = useState(0);
  const hasContent = INFOGRAPHICS.length > 0;

  function prev() {
    setCurrent((c) => (c - 1 + INFOGRAPHICS.length) % INFOGRAPHICS.length);
  }
  function next() {
    setCurrent((c) => (c + 1) % INFOGRAPHICS.length);
  }

  return (
    <section
      id="infographics"
      className="py-32 px-6"
      style={{ background: "#0a0a0a" }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="text-xs tracking-[0.25em] uppercase font-mono mb-4 block"
            style={{ color: "#c8a96e" }}
          >
            Visual Summary
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
            style={{ color: "#f0ede8" }}
          >
            The Architecture, Visualized
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#6a6460" }}>
            Key concepts from COHERENCE rendered as infographics — the causal chain, the
            nervous system map, the coherence threshold.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden border"
          style={{
            background: "#0f0f0f",
            borderColor: "rgba(200,169,110,0.12)",
            minHeight: 480,
          }}
        >
          {hasContent ? (
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={INFOGRAPHICS[current].src}
                  alt={INFOGRAPHICS[current].caption}
                  className="w-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>

              {/* Controls */}
              {INFOGRAPHICS.length > 1 && (
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-200"
                    style={{
                      background: "rgba(8,8,8,0.8)",
                      borderColor: "rgba(200,169,110,0.2)",
                      color: "#c8a96e",
                    }}
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <span className="text-xs font-mono" style={{ color: "#6a6460" }}>
                    {current + 1} / {INFOGRAPHICS.length}
                  </span>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-200"
                    style={{
                      background: "rgba(8,8,8,0.8)",
                      borderColor: "rgba(200,169,110,0.2)",
                      color: "#c8a96e",
                    }}
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Placeholder */
            <div className="flex flex-col items-center justify-center gap-4 py-24">
              <div
                className="w-16 h-16 rounded-full border-2 flex items-center justify-center"
                style={{ borderColor: "rgba(200,169,110,0.3)" }}
              >
                <ImageIcon size={24} style={{ color: "#c8a96e" }} />
              </div>
              <p className="text-sm font-mono" style={{ color: "#3a3430" }}>
                Infographics · Coming Soon
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
