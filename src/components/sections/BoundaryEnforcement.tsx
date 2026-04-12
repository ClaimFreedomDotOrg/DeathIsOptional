import { motion } from "framer-motion";
import { X, Check, Shield } from "lucide-react";

const NEXTJS_CODE = `// Next.js: convention only
"use server"  // ← string. Not enforced.

async function deleteUser(id: string) {
  await db.delete(id)
}

// Call it from client? Runtime error.
// Discovered at 2am.
// Your users saw a 500.`;

const FORGE_CODE = `// app/server/users.fx
"use module server"

export const deleteUser = server async function(id: string): Promise<void> {
  await db.delete(id)
}

// Import it from a client module?
// E001: Cannot import server module
// 'server/users.fx' from client context.
// (forge:compiler)
//
// ↑ Caught at compile time.
// Not at 2am.`;

function colorizeNextjs(code: string) {
  return code
    .split("\n")
    .map((line) => {
      if (line.startsWith("//"))
        return `<span class="text-forge-slate italic">${line}</span>`;
      if (line.includes('"use server"'))
        return line
          .replace(
            '"use server"',
            '<span class="text-green-400">"use server"</span>',
          )
          .replace(
            "// ← string. Not enforced.",
            '<span class="text-forge-slate italic">// ← string. Not enforced.</span>',
          );
      if (line.match(/\b(async|function|await|string)\b/))
        return line
          .replace(
            /\b(async|function|await)\b/g,
            '<span class="text-purple-400">$1</span>',
          )
          .replace(/\b(string)\b/g, '<span class="text-blue-400">$1</span>');
      return line;
    })
    .join("\n");
}

function colorizeForge(code: string) {
  return code
    .split("\n")
    .map((line) => {
      if (line.startsWith("//"))
        return `<span class="text-forge-slate italic">${line}</span>`;
      if (line.includes('"use module server"'))
        return `<span class="text-green-400">${line}</span>`;
      if (line.includes("E001:"))
        return `<span class="text-forge-green">${line}</span>`;
      if (line.includes("forge:compiler") || line.includes("server/users.fx"))
        return `<span class="text-forge-green">${line}</span>`;
      return line
        .replace(/\bserver\b/, '<span class="text-forge-amber font-bold">server</span>')
        .replace(
          /\b(export|const|async|function|await|return)\b/g,
          '<span class="text-purple-400">$1</span>',
        )
        .replace(
          /\b(string|Promise|void)\b/g,
          '<span class="text-blue-400">$1</span>',
        );
    })
    .join("\n");
}

export function BoundaryEnforcement() {
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
            Compiler Boundaries
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-forge-white mt-3 mb-4">
            Conventions vs.{" "}
            <span className="text-forge-orange">guarantees</span>
          </h2>
          <p className="text-forge-slate max-w-2xl mx-auto">
            In Next.js, server boundaries are strings. In Forge, they're
            language primitives — enforced at compile time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Next.js — dangerous */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden border border-forge-red/30"
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-forge-red/10 border-b border-forge-red/20">
              <X size={16} className="text-forge-red" />
              <span className="text-forge-red font-semibold text-sm">
                Next.js — convention only
              </span>
            </div>
            <div className="p-5 bg-forge-iron font-mono text-sm leading-relaxed overflow-x-auto">
              <pre
                className="text-forge-white/80 whitespace-pre"
                dangerouslySetInnerHTML={{
                  __html: colorizeNextjs(NEXTJS_CODE),
                }}
              />
            </div>
          </motion.div>

          {/* Forge — safe */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden border border-forge-green/30"
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-forge-green/10 border-b border-forge-green/20">
              <Check size={16} className="text-forge-green" />
              <span className="text-forge-green font-semibold text-sm">
                Forge — compiler enforced
              </span>
            </div>
            <div className="p-5 bg-forge-iron font-mono text-sm leading-relaxed overflow-x-auto">
              <pre
                className="text-forge-white/80 whitespace-pre"
                dangerouslySetInnerHTML={{ __html: colorizeForge(FORGE_CODE) }}
              />
            </div>
          </motion.div>
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-forge-orange/30 bg-forge-orange/5 p-8 flex items-start gap-4"
        >
          <Shield size={24} className="text-forge-orange flex-shrink-0 mt-1" />
          <p className="text-forge-white/80 leading-relaxed">
            In Next.js,{" "}
            <code className="font-mono text-green-400 bg-forge-steel/50 px-1.5 py-0.5 rounded">
              "use server"
            </code>{" "}
            is a string. A convention. The runtime enforces it — violations
            surface in production. In Forge,{" "}
            <code className="font-mono text-forge-amber bg-forge-steel/50 px-1.5 py-0.5 rounded">
              server
            </code>{" "}
            is a language keyword and{" "}
            <code className="font-mono text-green-400 bg-forge-steel/50 px-1.5 py-0.5 rounded">
              "use module server"
            </code>{" "}
            is a module directive — both enforced by the compiler. Crossing the
            boundary is error{" "}
            <code className="font-mono text-forge-green bg-forge-steel/50 px-1.5 py-0.5 rounded">
              E001
            </code>
            .{" "}
            <strong className="text-forge-orange">
              Boundary violations are impossible to ship.
            </strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
