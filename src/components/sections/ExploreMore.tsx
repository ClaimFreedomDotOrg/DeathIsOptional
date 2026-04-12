import { motion } from "framer-motion";
import { Brain, Zap, ExternalLink } from "lucide-react";

const links = [
  {
    icon: Brain,
    title: "Tame the DMN",
    url: "https://tamethedmn.com",
    description:
      "The operational hub. AI-powered DMN guide, biofeedback hardware (Project H.A.L.O.), a rhythm-based coherence game, community, and the tools for reclaiming your nervous system.",
  },
  {
    icon: Zap,
    title: "Claim Freedom",
    url: "https://claimfreedom.org",
    description:
      "The knowledge base. A comprehensive wiki unifying Gnostic cosmology, Indigenous wisdom, Eastern philosophy, and modern neuroscience. Books, biblical decodings, practices, and the full Neuro-Gnostic framework.",
  },
];

export function ExploreMore() {
  return (
    <section
      id="explore"
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
            Go Deeper
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
            style={{ color: "#f0ede8" }}
          >
            Explore the Ecosystem
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#6a6460" }}>
            COHERENCE is the unified theory. These are the tools and knowledge base built
            from it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {links.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl p-8 border flex flex-col gap-5 transition-all duration-200"
                style={{
                  background: "#0f0f0f",
                  borderColor: "rgba(200,169,110,0.12)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(200,169,110,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(200,169,110,0.12)";
                }}
              >
                <div className="flex items-start justify-between">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(200,169,110,0.08)" }}
                  >
                    <Icon size={22} style={{ color: "#c8a96e" }} />
                  </div>
                  <ExternalLink
                    size={14}
                    style={{ color: "#3a3430" }}
                    className="mt-1 group-hover:text-[#c8a96e] transition-colors duration-200"
                  />
                </div>

                <div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "#f0ede8" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#6a6460" }}
                  >
                    {item.description}
                  </p>
                </div>

                <span
                  className="text-xs font-mono tracking-wider mt-auto"
                  style={{ color: "#c8a96e", opacity: 0.6 }}
                >
                  {item.url.replace("https://", "")} →
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
