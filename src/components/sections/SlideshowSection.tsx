import { motion } from "framer-motion";
import { PresentationIcon, Download } from "lucide-react";

// PLACEHOLDER: Replace with actual slideshow embed/download when available
const SLIDESHOW_EMBED = "";
const SLIDESHOW_DOWNLOAD = "";

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
            A complete slide presentation of the COHERENCE framework — view inline or download
            to share.
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
            minHeight: 480,
          }}
        >
          {SLIDESHOW_EMBED ? (
            <div>
              <iframe
                src={SLIDESHOW_EMBED}
                className="w-full"
                style={{ minHeight: 480, border: "none" }}
                title="COHERENCE Slideshow"
                allowFullScreen
              />
              {SLIDESHOW_DOWNLOAD && (
                <div className="p-6 text-center border-t" style={{ borderColor: "rgba(200,169,110,0.12)" }}>
                  <a
                    href={SLIDESHOW_DOWNLOAD}
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border transition-colors duration-200"
                    style={{
                      borderColor: "rgba(200,169,110,0.3)",
                      color: "#c8a96e",
                    }}
                  >
                    <Download size={16} />
                    Download Slideshow
                  </a>
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
                <PresentationIcon size={24} style={{ color: "#c8a96e" }} />
              </div>
              <p className="text-sm font-mono" style={{ color: "#3a3430" }}>
                Slideshow · Coming Soon
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
