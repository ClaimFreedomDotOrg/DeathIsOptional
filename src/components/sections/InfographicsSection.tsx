import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X, Download } from "lucide-react";

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
  const [lightbox, setLightbox] = useState<number | null>(null);

  function prev() {
    setCurrent((c) => (c - 1 + INFOGRAPHICS.length) % INFOGRAPHICS.length);
  }
  function next() {
    setCurrent((c) => (c + 1) % INFOGRAPHICS.length);
  }

  function lightboxPrev() {
    setLightbox((c) =>
      c !== null ? (c - 1 + INFOGRAPHICS.length) % INFOGRAPHICS.length : null
    );
  }
  function lightboxNext() {
    setLightbox((c) =>
      c !== null ? (c + 1) % INFOGRAPHICS.length : null
    );
  }

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") lightboxPrev();
      if (e.key === "ArrowRight") lightboxNext();
    },
    [lightbox]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
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
              portrait, and square formats. Click to view fullscreen.
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
            <div
              className="relative cursor-pointer group"
              onClick={() => setLightbox(current)}
            >
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

              {/* Fullscreen hint overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
                  style={{
                    background: "rgba(8,8,8,0.85)",
                    color: "#c8a96e",
                  }}
                >
                  <Maximize2 size={16} />
                  View Fullscreen
                </div>
              </div>
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

            {/* Download links */}
            <div className="flex flex-wrap gap-3 px-6 pb-6">
              {INFOGRAPHICS.map((item) => (
                <a
                  key={item.src}
                  href={item.src}
                  download
                  className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded border transition-colors duration-200 hover:border-[#c8a96e]/40 hover:text-[#c8a96e]"
                  style={{
                    borderColor: "rgba(200,169,110,0.15)",
                    color: "#6a6460",
                  }}
                >
                  <Download size={11} />
                  {item.aspect}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fullscreen lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.95)" }}
            onClick={() => setLightbox(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-200 hover:border-[#c8a96e]/50 z-10"
              style={{
                background: "rgba(15,15,15,0.8)",
                borderColor: "rgba(200,169,110,0.2)",
                color: "#c8a96e",
              }}
            >
              <X size={18} />
            </button>

            {/* Download button */}
            <a
              href={INFOGRAPHICS[lightbox].src}
              download
              onClick={(e) => e.stopPropagation()}
              className="absolute top-6 right-20 w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-200 hover:border-[#c8a96e]/50 z-10"
              style={{
                background: "rgba(15,15,15,0.8)",
                borderColor: "rgba(200,169,110,0.2)",
                color: "#c8a96e",
              }}
            >
              <Download size={16} />
            </a>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                lightboxPrev();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border flex items-center justify-center transition-colors duration-200 hover:border-[#c8a96e]/50 z-10"
              style={{
                background: "rgba(15,15,15,0.8)",
                borderColor: "rgba(200,169,110,0.2)",
                color: "#c8a96e",
              }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                lightboxNext();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border flex items-center justify-center transition-colors duration-200 hover:border-[#c8a96e]/50 z-10"
              style={{
                background: "rgba(15,15,15,0.8)",
                borderColor: "rgba(200,169,110,0.2)",
                color: "#c8a96e",
              }}
            >
              <ChevronRight size={20} />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={lightbox}
                src={INFOGRAPHICS[lightbox].src}
                alt={INFOGRAPHICS[lightbox].caption}
                className="max-w-[95vw] max-h-[90vh] object-contain select-none"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                draggable={false}
              />
            </AnimatePresence>

            {/* Caption + counter */}
            <div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 px-5 py-2.5 rounded-lg"
              style={{ background: "rgba(15,15,15,0.8)" }}
            >
              <span className="text-xs font-mono" style={{ color: "#6a6460" }}>
                {lightbox + 1} / {INFOGRAPHICS.length}
              </span>
              <span className="text-xs" style={{ color: "#a09890" }}>
                {INFOGRAPHICS[lightbox].caption}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
