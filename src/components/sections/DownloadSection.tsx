import { motion } from "framer-motion";
import { BookOpen, FileText, Download } from "lucide-react";

const downloads = [
  {
    icon: BookOpen,
    title: "COHERENCE",
    subtitle: "The Architecture of Immortality",
    description:
      "The complete book. A unified theory of consciousness, entropy, and eternal life — spanning physics, neuroscience, thermodynamics, and every major wisdom tradition. Written for anyone.",
    file: "/COHERENCE_The_Architecture_of_Immortality.pdf",
    filename: "COHERENCE_The_Architecture_of_Immortality.pdf",
    label: "Download the Book",
  },
  {
    icon: FileText,
    title: "The Coherence Framework",
    subtitle: "White Paper",
    description:
      "The technical architecture. Transdisciplinary synthesis across physics, biology, theology, and consciousness studies — including the Salience Network, vagus nerve, and the gatekeeper at the intersection of the cross.",
    file: "/The_Coherence_Framework_White_Paper.pdf",
    filename: "The_Coherence_Framework_White_Paper.pdf",
    label: "Download the White Paper",
  },
];

export function DownloadSection() {
  return (
    <section
      id="download"
      className="py-32 px-6"
      style={{ background: "#0a0a0a" }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-xs tracking-[0.25em] uppercase font-mono mb-4 block"
            style={{ color: "#c8a96e" }}
          >
            Free · No Registration
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
            style={{ color: "#f0ede8" }}
          >
            Read the Framework
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#6a6460" }}>
            Both documents are free. No email required. No paywall.
            The truth doesn't need a gate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {downloads.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-8 border flex flex-col gap-6"
                style={{
                  background: "#0f0f0f",
                  borderColor: "rgba(200,169,110,0.12)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(200,169,110,0.08)" }}
                >
                  <Icon size={22} style={{ color: "#c8a96e" }} />
                </div>

                <div className="flex-1">
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ color: "#f0ede8" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-xs uppercase tracking-widest font-mono mb-4"
                    style={{ color: "#c8a96e" }}
                  >
                    {item.subtitle}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6a6460" }}>
                    {item.description}
                  </p>
                </div>

                <div className="flex gap-3">
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm transition-opacity duration-200 hover:opacity-90"
                    style={{
                      background: "linear-gradient(135deg, #c8a96e, #a88a52)",
                      color: "#080808",
                    }}
                  >
                    <BookOpen size={15} />
                    Read Online
                  </a>
                  <a
                    href={item.file}
                    download={item.filename}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold text-sm border transition-colors duration-200"
                    style={{
                      borderColor: "rgba(200,169,110,0.3)",
                      color: "#c8a96e",
                    }}
                  >
                    <Download size={15} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
