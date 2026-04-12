import { motion } from "framer-motion";
import { Download } from "lucide-react";

const AUDIO_SRC = "/Achieving_biological_immortality_through_coherence.m4a";
const AUDIO_DOWNLOAD = "/Achieving_biological_immortality_through_coherence.m4a";

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
            A complete audio introduction to the COHERENCE framework — generated from the full
            text of the book. Listen now or download for later.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl p-10 border space-y-8"
          style={{
            background: "#0f0f0f",
            borderColor: "rgba(200,169,110,0.12)",
          }}
        >
          <div>
            <p className="text-sm font-medium mb-4" style={{ color: "#a09890" }}>
              Achieving Biological Immortality Through Coherence
            </p>
            <audio
              controls
              className="w-full"
              preload="metadata"
              style={{ accentColor: "#c8a96e" }}
            >
              <source src={AUDIO_SRC} type="audio/mp4" />
              Your browser does not support the audio element.
            </audio>
          </div>

          <div className="pt-2 border-t" style={{ borderColor: "rgba(200,169,110,0.08)" }}>
            <a
              href={AUDIO_DOWNLOAD}
              download="Achieving_biological_immortality_through_coherence.m4a"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border transition-colors duration-200"
              style={{
                borderColor: "rgba(200,169,110,0.3)",
                color: "#c8a96e",
                background: "rgba(200,169,110,0.04)",
              }}
            >
              <Download size={15} />
              Download Audio Overview
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
