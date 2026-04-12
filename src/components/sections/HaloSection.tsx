import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function HaloSection() {
  return (
    <section
      id="halo"
      className="py-32 px-6"
      style={{ background: "#0a0a0a" }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden border"
          style={{
            background: "#0f0f0f",
            borderColor: "rgba(200,169,110,0.12)",
          }}
        >
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src="/halo-promo.jpeg"
                alt="Project H.A.L.O. — Hemispheric Alignment & Limbic Override"
                className="w-full h-full object-cover"
                style={{ minHeight: 320 }}
              />
            </div>

            {/* Content */}
            <div className="p-10 flex flex-col justify-center">
              <span
                className="text-xs tracking-[0.25em] uppercase font-mono mb-4 block"
                style={{ color: "#c8a96e" }}
              >
                The Hardware
              </span>
              <h2
                className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4"
                style={{ color: "#f0ede8" }}
              >
                Project H.A.L.O.
              </h2>
              <p
                className="text-sm leading-relaxed mb-3"
                style={{ color: "#a09890" }}
              >
                Hemispheric Alignment &amp; Limbic Override
              </p>
              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: "#6a6460" }}
              >
                An open-source wearable that detects DMN hijacking in real-time and
                mechanically intervenes through vagus nerve stimulation and bilateral
                stimulation. The gatekeeper at the intersection of the cross, made
                tangible. Patent-free. Trauma healing should not be gatekept.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://halotuner.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-opacity duration-200 hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, #c8a96e, #a88a52)",
                    color: "#080808",
                  }}
                >
                  halotuner.com
                  <ExternalLink size={14} />
                </a>
                <a
                  href="https://github.com/ClaimFreedomDotOrg/ProjectHALO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border transition-colors duration-200"
                  style={{
                    borderColor: "rgba(200,169,110,0.3)",
                    color: "#c8a96e",
                  }}
                >
                  Open Source Build Guide
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
