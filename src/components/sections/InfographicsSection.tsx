import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const INFOGRAPHICS = [
  {
    src: "/infographic-landscape.png",
    caption: "The Coherence Framework — Landscape",
    aspect: "landscape",
  },
  {
    src: "/infographic-portrait.png",
    caption: "The Coherence Framework — Portrait",
    aspect: "portrait",
  },
  {
    src: "/infographic-square.png",
    caption: "The Coherence Framework — Square",
    aspect: "square",
  },
];

export function InfographicsSection() {
  const [current, setCurrent] = useState(0);

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
            Key concepts from COHERENCE rendered as infographics. Available in landscape,
            portrait, and square formats — share freely.
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
          }}
        >
          {/* Slide */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={INFOGRAPHICS[current].src}
                alt={INFOGRAPHICS[current].caption}
                className="w-full object-contain"
                style={{ maxHeight: 600 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              />
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div
            className="flex items-center justify-between px-6 py-4 border-t"
            style={{ borderColor: "rgba(200,169,110,0.08)" }}
          >
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border flex items-center justify-center transition-colors duration-200 hover:border-[#c8a96e]/50"
              style={{
                background: "#0f0f0f",
                borderColor: "rgba(200,169,110,0.2)",
                color: "#c8a96e",
              }}
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex items-center gap-3">
              {INFOGRAPHICS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="rounded-full transition-all duration-200"
                  style={{
                    width: i === current ? 20 : 6,
                    height: 6,
                    background: i === current ? "#c8a96e" : "rgba(200,169,110,0.2)",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-9 h-9 rounded-full border flex items-center justify-center transition-colors duration-200 hover:border-[#c8a96e]/50"
              style={{
                background: "#0f0f0f",
                borderColor: "rgba(200,169,110,0.2)",
                color: "#c8a96e",
              }}
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Download links for each format */}
          <div
            className="flex flex-wrap gap-3 px-6 pb-6"
          >
            {INFOGRAPHICS.map((item) => (
              <a
                key={item.src}
                href={item.src}
                download
                className="text-xs font-mono px-3 py-1.5 rounded border transition-colors duration-200"
                style={{
                  borderColor: "rgba(200,169,110,0.15)",
                  color: "#6a6460",
                }}
              >
                ↓ {item.aspect}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
