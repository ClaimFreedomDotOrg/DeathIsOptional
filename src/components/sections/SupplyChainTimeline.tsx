import { motion } from "framer-motion";
import { SECURITY_INCIDENTS } from "@/domain/marketing";
import { StatCounter } from "@/components/shared/StatCounter";

const SEVERITY_COLORS: Record<string, string> = {
  critical: "border-forge-red/50 bg-forge-red/5",
  high: "border-forge-amber/50 bg-forge-amber/5",
  medium: "border-yellow-600/50 bg-yellow-600/5",
};

const SEVERITY_BADGE: Record<string, string> = {
  critical: "bg-forge-red/20 text-forge-red border-forge-red/30",
  high: "bg-forge-amber/20 text-forge-amber border-forge-amber/30",
  medium: "bg-yellow-600/20 text-yellow-400 border-yellow-600/30",
};

export function SupplyChainTimeline() {
  return (
    <section className="py-24 px-4 bg-forge-iron">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-forge-red font-mono text-sm uppercase tracking-widest">
            Attack Timeline
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-forge-white mt-3 mb-4">
            Supply chain attacks are{" "}
            <span className="text-forge-red">accelerating</span>
          </h2>
          <p className="text-forge-slate max-w-2xl mx-auto">
            This isn't hypothetical. These are real incidents, real packages,
            real production breaches.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-forge-steel/50" />

          <div className="space-y-8">
            {SECURITY_INCIDENTS.map((incident, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Dot */}
                <div className="absolute left-2.5 md:left-6 top-4 w-3 h-3 rounded-full bg-forge-red border-2 border-forge-iron z-10" />

                <div
                  className={`rounded-xl border p-5 ${SEVERITY_COLORS[incident.severity]}`}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-forge-slate text-xs font-mono">
                      {incident.date}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${SEVERITY_BADGE[incident.severity]}`}
                    >
                      {incident.severity.toUpperCase()}
                    </span>
                    {incident.downloads && (
                      <span className="text-xs text-forge-white/50 font-mono">
                        {incident.downloads}
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-forge-white mb-1">
                    {incident.title}
                  </h3>
                  <p className="text-forge-white/60 text-sm leading-relaxed">
                    {incident.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 rounded-xl border border-forge-steel/30 bg-forge-steel/10 p-8"
        >
          <StatCounter
            value="3,000+"
            label="malicious packages (2024)"
            danger
          />
          <StatCounter
            value="120,612"
            label="attacks blocked (Q4 2025)"
            danger
          />
          <StatCounter value="80%" label="of deps unupgraded 1+ year" danger />
          <StatCounter
            value="23%"
            label="month-over-month attack growth"
            danger
          />
        </motion.div>
      </div>
    </section>
  );
}
