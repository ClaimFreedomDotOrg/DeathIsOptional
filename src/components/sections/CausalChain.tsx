import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    trigger: "Fear",
    mechanism: "Hijacks the Default Mode Network",
    detail: "The DMN locks into a temporal suffering loop — rumination about the past, catastrophic projection into the future. Consciousness trapped in a closed system.",
  },
  {
    number: "02",
    trigger: "DMN Activation",
    mechanism: "HPA Axis fires → Cortisol floods the system",
    detail: "Chronic stress hormones flood every cell. The body enters a permanent state of fight-or-flight it was never designed to sustain.",
  },
  {
    number: "03",
    trigger: "Cortisol Cascade",
    mechanism: "Telomeres shred at 6× baseline rate",
    detail: "The biological clock accelerates. The protective caps on every chromosome degrade under chronic stress hormones, shortening the cellular lifespan of every tissue.",
  },
  {
    number: "04",
    trigger: "Cellular Degradation",
    mechanism: "Quantum coherence collapses in microtubules",
    detail: "The quantum architecture of consciousness destabilizes. The microtubular lattice — the substrate of coherent awareness — loses its ordered state.",
  },
  {
    number: "05",
    trigger: "Decoherence",
    mechanism: "Zero-Point Field connection severs",
    detail: "The system loses contact with the plenum — the field of negentropic energy that sustains biological order. The open system closes.",
  },
  {
    number: "06",
    trigger: "Field Severance",
    mechanism: "Negentropic influx chokes off",
    detail: "The import of order from the cosmic field stops. The organism can no longer maintain itself against entropy. The equation tips.",
  },
  {
    number: "07",
    trigger: "Entropy Accumulation",
    mechanism: "System closes → dissolution follows",
    detail: "Internal entropy exceeds negentropic influx. The standing wave that is you loses coherence. The pattern dissolves. We call this death.",
  },
];

export function CausalChain() {
  return (
    <section
      id="causal-chain"
      className="py-32 px-6"
      style={{ background: "#080808" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span
            className="text-xs tracking-[0.25em] uppercase font-mono mb-4 block"
            style={{ color: "#c8a96e" }}
          >
            The Mechanism
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
            style={{ color: "#f0ede8" }}
          >
            Death is a math problem.
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "#6a6460" }}>
            Every tradition that ever pointed toward immortality was describing the same causal
            chain in a different language. Here it is in one.
          </p>
        </motion.div>

        {/* Equation display */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-xl p-8 mb-20 text-center border"
          style={{
            background: "rgba(200,169,110,0.04)",
            borderColor: "rgba(200,169,110,0.12)",
          }}
        >
          <p className="font-mono text-sm md:text-base leading-loose" style={{ color: "#8a7a6a" }}>
            <span style={{ color: "#c8a96e" }}>death</span> = internal entropy accumulation{" "}
            <span style={{ color: "#c8a96e" }}>&gt;</span> negentropic influx
          </p>
          <p className="font-mono text-sm md:text-base leading-loose mt-2" style={{ color: "#8a7a6a" }}>
            <span style={{ color: "#c8a96e" }}>fear</span> = the{" "}
            <span style={{ color: "#f0ede8" }}>only</span> mechanism that tips the equation
          </p>
          <p className="font-mono text-sm md:text-base leading-loose mt-2" style={{ color: "#8a7a6a" }}>
            fear&#x2011;zero = open system = infinite negentropic influx ={" "}
            <span style={{ color: "#c8a96e" }}>no net entropy</span> = indefinite life
          </p>
        </motion.div>

        {/* Causal chain steps */}
        <div className="space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex gap-6 relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="absolute left-[1.35rem] top-12 bottom-0 w-px"
                  style={{ background: "rgba(200,169,110,0.1)" }}
                />
              )}

              {/* Number */}
              <div className="flex-shrink-0 mt-1">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-mono font-bold border"
                  style={{
                    background: "#0f0f0f",
                    borderColor: "rgba(200,169,110,0.2)",
                    color: "#c8a96e",
                  }}
                >
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="pb-12">
                <div
                  className="text-xs tracking-widest uppercase font-mono mb-1"
                  style={{ color: "#c8a96e" }}
                >
                  {step.trigger}
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "#f0ede8" }}
                >
                  {step.mechanism}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6a6460" }}>
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reversal note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-xl p-8 border text-center"
          style={{
            background: "rgba(200,169,110,0.03)",
            borderColor: "rgba(200,169,110,0.15)",
          }}
        >
          <p className="text-lg font-semibold mb-2" style={{ color: "#f0ede8" }}>
            Remove fear — reverse every step.
          </p>
          <p className="text-sm" style={{ color: "#6a6460" }}>
            This is not metaphor. This is the unified field theory of mortality. Every empirical
            tradition, every mystical lineage, every neuroscience lab pointing at the same mechanism
            from a different direction.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
