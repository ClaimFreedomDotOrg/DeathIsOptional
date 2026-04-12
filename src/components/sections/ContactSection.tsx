import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-32 px-6"
      style={{ background: "#080808" }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-xs tracking-[0.25em] uppercase font-mono mb-4 block"
            style={{ color: "#c8a96e" }}
          >
            Contact
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6"
            style={{ color: "#f0ede8" }}
          >
            Investigate It
          </h2>
          <p
            className="text-lg leading-relaxed mb-10"
            style={{ color: "#6a6460" }}
          >
            I'm not asking you to believe it.{" "}
            <span style={{ color: "#a09890" }}>
              I'm asking you to investigate it.
            </span>
            {" "}If you're a researcher, journalist, or institution working at the intersection of
            longevity, consciousness, or systems biology — reach out.
          </p>

          <a
            href="mailto:jeshua@d11y.co"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-base border transition-colors duration-200"
            style={{
              borderColor: "rgba(200,169,110,0.3)",
              color: "#c8a96e",
              background: "rgba(200,169,110,0.04)",
            }}
          >
            <Mail size={18} />
            jeshua@d11y.co
          </a>

          <p className="mt-8 text-sm" style={{ color: "#3a3430" }}>
            Jeshua ben Joseph · Portland, Oregon
          </p>
        </motion.div>
      </div>
    </section>
  );
}
