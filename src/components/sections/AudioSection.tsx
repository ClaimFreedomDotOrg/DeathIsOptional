import { motion } from "framer-motion";
import { Headphones, Download } from "lucide-react";

// PLACEHOLDER: Replace with actual audio file path when uploaded
const AUDIO_SRC = "";
const AUDIO_DOWNLOAD = "";

export function AudioSection() {
  return (
    <section
      id="audio"
      className="py-32 px-6"
      style={{ background: "#080808" }}
    >
      <div className="max-w-3xl mx-auto">
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
            Listen
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
            style={{ color: "#f0ede8" }}
          >
            Audio Overview
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#6a6460" }}>
            Generated from the full text of COHERENCE. A complete introduction to the framework
            in audio form — listen now or download for later.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl p-10 border"
          style={{
            background: "#0f0f0f",
            borderColor: "rgba(200,169,110,0.12)",
          }}
        >
          {AUDIO_SRC ? (
            <div className="space-y-6">
              <audio
                controls
                className="w-full"
                style={{ accentColor: "#c8a96e" }}
              >
                <source src={AUDIO_SRC} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              {AUDIO_DOWNLOAD && (
                <div className="text-center">
                  <a
                    href={AUDIO_DOWNLOAD}
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border transition-colors duration-200"
                    style={{
                      borderColor: "rgba(200,169,110,0.3)",
                      color: "#c8a96e",
                    }}
                  >
                    <Download size={16} />
                    Download Audio Overview
                  </a>
                </div>
              )}
            </div>
          ) : (
            /* Placeholder */
            <div className="flex flex-col items-center gap-4 py-8">
              <div
                className="w-16 h-16 rounded-full border-2 flex items-center justify-center"
                style={{ borderColor: "rgba(200,169,110,0.3)" }}
              >
                <Headphones size={24} style={{ color: "#c8a96e" }} />
              </div>
              <p className="text-sm font-mono" style={{ color: "#3a3430" }}>
                Audio Overview · Coming Soon
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
