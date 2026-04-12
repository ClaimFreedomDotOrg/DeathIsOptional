import { useState } from "react";
import { motion } from "framer-motion";

const FX_CODE = `// app/pages/user-detail.fx
"use module client"

import { getUser } from '../server/users.fx'
import { useParams } from 'forge:router'

export component UserDetail() {
  const { id } = useParams()

  // $async — reactive async signal, auto-reruns on dep change
  const user = $async(() => getUser(id))

  // $derived — auto-tracks $user read, no boilerplate
  const displayName = $derived(() =>
    $user.state === 'ready' ? $user.value!.name : 'Loading...'
  )

  return (
    <div class="profile">
      {$user.state === 'pending' && <Spinner />}
      {$user.state === 'ready' && <h1>{$displayName}</h1>}
      {$user.state === 'error' && <p>{$user.error!.message}</p>}
    </div>
  )
}`;

// Server module — separate file, shown for context
const SERVER_CODE = `// app/server/users.fx
"use module server"

import { db } from 'forge:db'

export interface User { id: string; name: string }

// server keyword — compile-time boundary enforcement
export const getUser = server async function(id: string): Promise<User> {
  return await db.users.find(id)
}`;

const CALLOUTS = [
  {
    pattern: "server",
    label: "Keyword, not a string. Compile-time boundary — violating it is a type error, not a runtime crash.",
    color: "text-forge-amber",
  },
  {
    pattern: "$async",
    label: "Reactive async signal. Re-runs when dependencies change. Exposes .state / .value / .error — no useEffect, no loading state boilerplate.",
    color: "text-forge-green",
  },
  {
    pattern: "$derived",
    label: "Computed signal. Auto-tracks every $signal read inside the function. Lazy — only recomputes when read.",
    color: "text-forge-green",
  },
  {
    pattern: "$user.state",
    label: "Pattern-match on 'pending' | 'ready' | 'error'. The compiler ensures you handle all cases.",
    color: "text-forge-green",
  },
];

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function highlightFx(code: string): string {
  // Tokenize each line so regexes never run on already-emitted HTML.
  // Groups: signal, comment, string, keyword (server special), keyword, type, digit
  const TOKEN = /(\$async|\$signal|\$derived|\$effect|\$[a-zA-Z]+)|(\/\/.*$)|(["'][^"']*["'])|(\bserver\b)|(\b(?:component|async|function|return|export|import|const|null|true|false|await|from|interface)\b)|(\b(?:string|User|Promise|void|number|boolean|Partial)\b)|(\b\d+(?:\.\d+)?\b)/g;

  return code
    .split("\n")
    .map((line) => {
      let result = "";
      let lastIndex = 0;
      let match: RegExpExecArray | null;
      TOKEN.lastIndex = 0;

      while ((match = TOKEN.exec(line)) !== null) {
        result += escapeHtml(line.slice(lastIndex, match.index));
        lastIndex = match.index + match[0].length;

        const [full, signal, comment, str, serverKw, keyword, type, digit] = match;

        if (signal)
          result += `<span class="text-forge-green font-medium">${escapeHtml(full)}</span>`;
        else if (comment)
          result += `<span class="text-forge-slate italic">${escapeHtml(full)}</span>`;
        else if (str)
          result += `<span class="text-green-400">${escapeHtml(full)}</span>`;
        else if (serverKw)
          result += `<span class="text-forge-amber font-bold">${escapeHtml(full)}</span>`;
        else if (keyword)
          result += `<span class="text-purple-400">${escapeHtml(full)}</span>`;
        else if (type)
          result += `<span class="text-blue-400">${escapeHtml(full)}</span>`;
        else if (digit)
          result += `<span class="text-forge-orange">${escapeHtml(full)}</span>`;
      }

      result += escapeHtml(line.slice(lastIndex));
      return result;
    })
    .join("\n");
}

const TABS = [
  { label: "app/pages/user-detail.fx", code: FX_CODE },
  { label: "app/server/users.fx", code: SERVER_CODE },
];

export function FxFormat() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 px-4 bg-forge-iron">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-forge-orange font-mono text-sm uppercase tracking-widest">
            .fx Format
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-forge-white mt-3 mb-4">
            Full-stack in{" "}
            <span className="text-forge-orange">two files.</span>
          </h2>
          <p className="text-forge-slate max-w-2xl mx-auto">
            Client and server are separate{" "}
            <code className="font-mono text-forge-amber bg-forge-steel/50 px-1.5 py-0.5 rounded">
              .fx
            </code>{" "}
            modules with explicit directives. The compiler enforces the boundary
            — crossing it is a compile error, not a runtime crash.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Code */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="rounded-xl overflow-hidden border border-forge-steel/50">
              <div className="flex items-center gap-0 bg-forge-steel/60 border-b border-forge-steel/40">
                <div className="flex gap-1.5 px-4 py-2.5 border-r border-forge-steel/40">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                {TABS.map((tab, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`px-4 py-2.5 text-xs font-mono transition-colors border-r border-forge-steel/40 ${
                      activeTab === i
                        ? "text-forge-white bg-[#0d0f1a]"
                        : "text-forge-slate hover:text-forge-white/70"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="bg-[#0d0f1a] p-6 overflow-x-auto">
                <pre
                  className="text-forge-white/85 text-sm leading-relaxed whitespace-pre font-mono"
                  dangerouslySetInnerHTML={{
                    __html: highlightFx(TABS[activeTab].code),
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Callouts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {CALLOUTS.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-lg border border-forge-steel/30 bg-forge-steel/10 p-4"
              >
                <code className={`font-mono text-sm font-bold ${c.color}`}>
                  {c.pattern}
                </code>
                <div className="text-forge-white/60 text-xs mt-1 leading-relaxed">
                  {c.label}
                </div>
              </motion.div>
            ))}

            <div className="rounded-lg border border-forge-orange/20 bg-forge-orange/5 p-4 mt-6">
              <div className="text-forge-orange font-semibold text-sm mb-2">
                Compiler guarantees
              </div>
              <ul className="space-y-1.5 text-xs text-forge-white/60">
                <li>✓ Server code never reaches client bundle</li>
                <li>✓ E001 error if you import across boundary</li>
                <li>✓ RPC stubs auto-generated from types</li>
                <li>✓ Dead code stripped in single pass</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
