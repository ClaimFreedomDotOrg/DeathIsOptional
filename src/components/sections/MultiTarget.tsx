import { motion } from "framer-motion";
import {
  Server,
  Globe,
  Layout,
  Monitor,
  Smartphone,
  Check,
  X,
} from "lucide-react";

const TARGETS = [
  {
    icon: <Server size={20} />,
    label: "Server binary",
    desc: "No Node.js required",
  },
  { icon: <Globe size={20} />, label: "Edge", desc: "Cloudflare Workers" },
  {
    icon: <Layout size={20} />,
    label: "Static / CDN",
    desc: "Zero-runtime HTML",
  },
  { icon: <Monitor size={20} />, label: "Desktop", desc: "Tauri" },
  { icon: <Smartphone size={20} />, label: "Mobile", desc: "iOS / Android" },
];

const COMPARISON_ROWS = [
  {
    aspect: "Mobile",
    flutter: true,
    forge: true,
    npm: false,
    npmNote: "React Native (separate ecosystem)",
  },
  {
    aspect: "Desktop",
    flutter: true,
    forge: true,
    npm: false,
    npmNote: "Electron (separate ecosystem)",
  },
  {
    aspect: "Web",
    flutter: true,
    forge: true,
    npm: false,
    npmNote: "Next.js (separate config)",
  },
  {
    aspect: "Server",
    flutter: null,
    forge: true,
    npm: false,
    npmNote: "Node.js server",
  },
  {
    aspect: "Edge",
    flutter: null,
    forge: true,
    npm: false,
    npmNote: "Separate Workers config",
  },
  {
    aspect: "Dependency trees",
    flutter: "1",
    forge: "1",
    npm: "5",
    npmNote: "separate",
  },
  {
    aspect: "Security surfaces",
    flutter: "1",
    forge: "1",
    npm: "5",
    npmNote: "separate",
  },
];

function Cell({
  value,
  note,
}: {
  value: boolean | string | null;
  note?: string;
}) {
  if (value === null)
    return <span className="text-forge-slate/50 text-sm">N/A</span>;
  if (value === true)
    return <Check size={16} className="text-forge-green mx-auto" />;
  if (value === false)
    return (
      <div className="flex flex-col items-center gap-1">
        <X size={16} className="text-forge-red mx-auto" />
        {note && <span className="text-forge-red/60 text-xs">{note}</span>}
      </div>
    );
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-forge-green font-bold font-mono">{value}</span>
      {note && <span className="text-forge-slate text-xs">{note}</span>}
    </div>
  );
}

export function MultiTarget() {
  return (
    <section className="py-24 px-4 bg-forge-steel/10 border-y border-forge-steel/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-forge-orange font-mono text-sm uppercase tracking-widest">
            One Codebase
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-forge-white mt-3 mb-6">
            Flutter proved it in 2018.{" "}
            <span className="text-forge-orange">
              Forge does it for deployment.
            </span>
          </h2>
          <p className="text-forge-slate max-w-3xl mx-auto text-lg">
            Flutter showed that one language + one compiler can target every
            platform without separate SDKs or dependency trees. Forge does the
            same for deployment targets — one{" "}
            <code className="font-mono text-forge-amber">.fx</code> codebase,
            five outputs.
          </p>
        </motion.div>

        {/* Animated branching tree */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16"
        >
          {/* Center node */}
          <div className="rounded-2xl border-2 border-forge-orange bg-forge-orange/10 px-8 py-4 mb-8">
            <span className="text-forge-orange font-bold font-mono text-2xl">
              .fx
            </span>
            <div className="text-forge-white/50 text-xs text-center mt-1">
              one codebase
            </div>
          </div>

          {/* Branches */}
          <div className="flex flex-wrap justify-center gap-4">
            {TARGETS.map((target, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-px h-8 bg-forge-orange/40" />
                <div className="rounded-xl border border-forge-orange/30 bg-forge-steel/20 px-5 py-3 flex flex-col items-center gap-1 min-w-[130px]">
                  <div className="text-forge-orange">{target.icon}</div>
                  <span className="text-forge-white text-sm font-semibold">
                    {target.label}
                  </span>
                  <span className="text-forge-slate text-xs">
                    {target.desc}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden border border-forge-steel/30"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-forge-steel/40">
                <th className="text-left px-4 py-3 text-forge-slate font-semibold uppercase tracking-wide text-xs">
                  Target
                </th>
                <th className="text-center px-4 py-3 text-forge-slate font-semibold uppercase tracking-wide text-xs">
                  Flutter / Dart
                </th>
                <th className="text-center px-4 py-3 text-forge-orange font-semibold uppercase tracking-wide text-xs">
                  Forge
                </th>
                <th className="text-center px-4 py-3 text-forge-red font-semibold uppercase tracking-wide text-xs">
                  npm ecosystem
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr
                  key={i}
                  className={`border-t border-forge-steel/20 ${i % 2 === 0 ? "bg-forge-steel/5" : ""}`}
                >
                  <td className="px-4 py-3 text-forge-white font-medium">
                    {row.aspect}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <Cell value={row.flutter} />
                  </td>
                  <td className="px-4 py-3 text-center">
                    <Cell value={row.forge} />
                  </td>
                  <td className="px-4 py-3 text-center">
                    <Cell value={row.npm} note={row.npmNote} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
