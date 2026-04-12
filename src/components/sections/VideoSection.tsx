import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VIDEO_ID = "2_ctxq5AFhE";

export function VideoSection() {
  return (
    <section
      id="video"
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
            Watch
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight"
            style={{ color: "#f0ede8" }}
          >
            The Framework, Explained
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden border"
          style={{
            borderColor: "rgba(200,169,110,0.12)",
            aspectRatio: "16/9",
            background: "#0f0f0f",
          }}
        >
          {VIDEO_ID ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
              title="COHERENCE: The Architecture of Immortality"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            /* Placeholder */
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div
                className="w-16 h-16 rounded-full border-2 flex items-center justify-center"
                style={{ borderColor: "rgba(200,169,110,0.3)" }}
              >
                <Play size={24} style={{ color: "#c8a96e" }} />
              </div>
              <p className="text-sm font-mono" style={{ color: "#3a3430" }}>
                Video · Coming Soon
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
