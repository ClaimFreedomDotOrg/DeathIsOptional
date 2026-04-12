import { motion } from "framer-motion";
import {
  Shield,
  Database,
  Lock,
  CheckSquare,
  Mail,
  Cpu,
  HardDrive,
  Radio,
} from "lucide-react";

const NPM_CHAOS = [
  {
    category: "Auth",
    packages: ["next-auth", "passport", "lucia", "clerk", "auth0"],
  },
  {
    category: "Data fetching",
    packages: ["react-query", "swr", "apollo", "urql", "trpc"],
  },
  {
    category: "Email",
    packages: ["nodemailer", "sendgrid", "resend", "postmark", "mailgun"],
  },
  {
    category: "Jobs",
    packages: ["bull", "bullmq", "agenda", "bee-queue", "pg-boss"],
  },
  {
    category: "Storage",
    packages: ["aws-sdk", "minio", "cloudinary", "uploadthing"],
  },
  {
    category: "Testing",
    packages: ["jest", "vitest", "playwright", "cypress", "testing-library"],
  },
  {
    category: "Realtime",
    packages: ["socket.io", "pusher", "ably", "liveblocks"],
  },
  {
    category: "Router",
    packages: ["react-router", "tanstack-router", "wouter", "reach-router"],
  },
];

const FORGE_STDLIB = [
  {
    name: "forge:router",
    icon: <Shield size={18} />,
    desc: "File-system routing, layouts, navigation. Opinionated. Done.",
  },
  {
    name: "forge:data",
    icon: <Database size={18} />,
    desc: "Type-safe data fetching and mutation. One API. Always compatible.",
  },
  {
    name: "forge:auth",
    icon: <Lock size={18} />,
    desc: "Authentication and session management. Built in. No configuration nightmares.",
  },
  {
    name: "forge:test",
    icon: <CheckSquare size={18} />,
    desc: "Integrated testing. Same compiler. Same types. No jest config hell.",
  },
  {
    name: "forge:email",
    icon: <Mail size={18} />,
    desc: "Transactional email. First-party. Zero external dependencies.",
  },
  {
    name: "forge:jobs",
    icon: <Cpu size={18} />,
    desc: "Background job queue. Compiler-typed. No separate infra.",
  },
  {
    name: "forge:storage",
    icon: <HardDrive size={18} />,
    desc: "File storage abstraction. One API for local, S3, R2.",
  },
  {
    name: "forge:realtime",
    icon: <Radio size={18} />,
    desc: "WebSocket and SSE primitives. Compile-time typed events.",
  },
];

export function ForgeStandardLibrary() {
  return (
    <section className="py-24 px-4 bg-forge-iron">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-forge-orange font-mono text-sm uppercase tracking-widest">
            Standard Library
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-forge-white mt-3 mb-4">
            One answer. Not <span className="text-forge-red">forty.</span>
          </h2>
          <p className="text-forge-slate max-w-2xl mx-auto">
            The npm ecosystem gives you infinite choices for every problem.
            Forge gives you one — vetted, compiler-integrated, always
            compatible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* npm chaos */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-forge-red" />
              <h3 className="font-bold text-forge-red uppercase tracking-wide text-sm">
                The npm way
              </h3>
            </div>
            <div className="space-y-3">
              {NPM_CHAOS.map((cat, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-forge-red/10 bg-forge-red/5 px-4 py-3"
                >
                  <div className="text-forge-white/50 text-xs uppercase tracking-wide mb-2">
                    {cat.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.packages.map((pkg) => (
                      <span
                        key={pkg}
                        className="font-mono text-xs px-2 py-0.5 rounded bg-forge-steel/40 text-forge-white/60 border border-forge-steel/30"
                      >
                        {pkg}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-forge-red/60 text-sm text-center">
              ↑ Choose wisely. The wrong one hits a CVE in 6 months.
            </div>
          </motion.div>

          {/* Forge stdlib */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-forge-green" />
              <h3 className="font-bold text-forge-green uppercase tracking-wide text-sm">
                The Forge way
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {FORGE_STDLIB.map((mod, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-lg border border-forge-green/20 bg-forge-green/5 px-4 py-3 flex items-start gap-3"
                >
                  <div className="text-forge-green flex-shrink-0 mt-0.5">
                    {mod.icon}
                  </div>
                  <div>
                    <div className="font-mono text-forge-orange text-sm font-bold mb-0.5">
                      {mod.name}
                    </div>
                    <div className="text-forge-white/60 text-xs leading-relaxed">
                      {mod.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
