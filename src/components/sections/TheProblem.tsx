import { motion } from "framer-motion";
import { AlertTriangle, Package, Zap, Server } from "lucide-react";

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  items: string[];
  index: number;
}

function ProblemCard({
  icon,
  title,
  subtitle,
  items,
  index,
}: ProblemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-xl border border-forge-red/20 bg-forge-steel/20 p-6 flex flex-col gap-4"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 p-2 rounded-lg bg-forge-red/10 border border-forge-red/20 text-forge-red">
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-forge-white text-lg">{title}</h3>
          <p className="text-forge-red text-sm font-mono mt-0.5">{subtitle}</p>
        </div>
      </div>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm text-forge-white/70"
          >
            <AlertTriangle
              size={14}
              className="text-forge-red flex-shrink-0 mt-0.5"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function TheProblem() {
  return (
    <section className="py-24 px-4 bg-forge-iron">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-forge-red font-mono text-sm uppercase tracking-widest">
            The Problem
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-forge-white mt-3 mb-4">
            The JS ecosystem is a{" "}
            <span className="text-forge-red">loaded gun</span>
          </h2>
          <p className="text-forge-slate max-w-2xl mx-auto text-lg">
            Every time you run{" "}
            <code className="font-mono text-forge-amber bg-forge-steel/50 px-1.5 py-0.5 rounded">
              npm install
            </code>
            , you're trusting strangers with production access. Here's what that
            trust costs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ProblemCard
            index={0}
            icon={<Package size={20} />}
            title="npm"
            subtitle="Registry Roulette"
            items={[
              "Mutable versions — `latest` tag can change under you without warning",
              "3,000+ malicious packages identified in 2024 alone",
              "Q4 2025: 120,612 malware attacks in a single quarter",
              "axios (100M+ weekly downloads) compromised by North Korean state actor UNC1069, March 31, 2026",
              "Shai-Hulud worm: 500+ packages, 2.6B weekly downloads hit September 2025",
            ]}
          />
          <ProblemCard
            index={1}
            icon={<Zap size={20} />}
            title="Bun"
            subtitle="Faster Downloads, Same Poison"
            items={[
              "CVE-2026-24910: Trust validation bypass — attackers spoof trusted dependency names",
              "PackageGate zero-days (2024-2025): 6 zero-days across JS package managers including Bun",
              "Still executes arbitrary post-install scripts from untrusted authors",
              "Root cause of Claude Code source leak: Bun's default source map generation",
            ]}
          />
          <ProblemCard
            index={2}
            icon={<Server size={20} />}
            title="Node.js"
            subtitle="Runtime Roulette"
            items={[
              "20+ CVEs in 12 months (2025-2026)",
              "HashDoS vulnerability re-introduced in v24 (July 2025)",
              "Permissions model bypass (Dec 2025) — --allow-fs-read/--allow-fs-write bypassed via symlinks",
              "HTTP request smuggling via malformed headers (May 2025)",
              "CVE-2024-27980: Arbitrary command injection on Windows",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
