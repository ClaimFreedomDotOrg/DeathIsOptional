import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Download, Maximize2, X } from "lucide-react";

const SLIDES_PDF = "/The_Architecture_of_Immortality_Slides.pdf";
const TOTAL_SLIDES = 15;
const SLIDES = Array.from({ length: TOTAL_SLIDES }, (_, i) => ({
  src: `/slides/slide-${String(i + 1).padStart(2, "0")}.jpg`,
  label: `Slide ${i + 1}`,
}));

export function SlideshowSection() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  function prev() {
    setCurrent((c) => (c - 1 + TOTAL_SLIDES) % TOTAL_SLIDES);
  }
  function next() {
    setCurrent((c) => (c + 1) % TOTAL_SLIDES);
  }

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    },
    [lightbox]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <>
      <section
        id="slideshow"
        className="py-32 px-6"
        style={{ background: "#080808" }}
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
              Presentation
            </span>
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
              style={{ color: "#f0ede8" }}
            >
              The Slideshow
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#6a6460" }}>
              The Architecture of Immortality in 15 slides. Click to view fullscreen.
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
              onClick={() => setLightbox(true)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={SLIDES[current].src}
                  alt={SLIDES[current].label}
                  className="w-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </AnimatePresence>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
                  style={{ background: "rgba(8,8,8,0.85)", color: "#c8a96e" }}
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

              <span className="text-xs font-mono" style={{ color: "#6a6460" }}>
                {current + 1} / {TOTAL_SLIDES}
              </span>

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

            {/* Download PDF */}
            <div className="px-6 pb-6">
              <a
                href={SLIDES_PDF}
                download="The_Architecture_of_Immortality_Slides.pdf"
                className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded border transition-colors duration-200 hover:border-[#c8a96e]/40 hover:text-[#c8a96e]"
                style={{
                  borderColor: "rgba(200,169,110,0.15)",
                  color: "#6a6460",
                }}
              >
                <Download size={11} />
                Download Slides PDF
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fullscreen lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.95)" }}
            onClick={() => setLightbox(false)}
          >
            <button
              onClick={() => setLightbox(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border flex items-center justify-center z-10"
              style={{
                background: "rgba(15,15,15,0.8)",
                borderColor: "rgba(200,169,110,0.2)",
                color: "#c8a96e",
              }}
            >
              <X size={18} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border flex items-center justify-center z-10"
              style={{
                background: "rgba(15,15,15,0.8)",
                borderColor: "rgba(200,169,110,0.2)",
                color: "#c8a96e",
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border flex items-center justify-center z-10"
              style={{
                background: "rgba(15,15,15,0.8)",
                borderColor: "rgba(200,169,110,0.2)",
                color: "#c8a96e",
              }}
            >
              <ChevronRight size={20} />
            </button>

            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={SLIDES[current].src}
                alt={SLIDES[current].label}
                className="max-w-[95vw] max-h-[90vh] object-contain select-none"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                draggable={false}
              />
            </AnimatePresence>

            <div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-lg text-xs font-mono"
              style={{ background: "rgba(15,15,15,0.8)", color: "#6a6460" }}
            >
              {current + 1} / {TOTAL_SLIDES}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
