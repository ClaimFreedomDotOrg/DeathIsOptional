import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";

const SLIDES_PDF = "/The_Architecture_of_Immortality_Slides.pdf";

export function SlideshowSection() {
  return (
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
            The Architecture of Immortality — a complete slide presentation of the COHERENCE
            framework. View inline or download to share.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl overflow-hidden border"
          style={{
            background: "#0f0f0f",
            borderColor: "rgba(200,169,110,0.12)",
          }}
        >
          {/* PDF embed */}
          <iframe
            src={`${SLIDES_PDF}#view=FitH`}
            className="w-full"
            style={{ height: 600, border: "none" }}
            title="The Architecture of Immortality — Slides"
          />

          {/* Actions */}
          <div
            className="flex flex-wrap gap-3 p-6 border-t"
            style={{ borderColor: "rgba(200,169,110,0.08)" }}
          >
            <a
              href={SLIDES_PDF}
              download="The_Architecture_of_Immortality_Slides.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border transition-colors duration-200"
              style={{
                borderColor: "rgba(200,169,110,0.3)",
                color: "#c8a96e",
                background: "rgba(200,169,110,0.04)",
              }}
            >
              <Download size={15} />
              Download Slideshow PDF
            </a>
            <a
              href={SLIDES_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border transition-colors duration-200"
              style={{
                borderColor: "rgba(200,169,110,0.15)",
                color: "#6a6460",
              }}
            >
              <ExternalLink size={15} />
              Open Full Screen
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
