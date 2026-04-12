// Domain types for the Forge marketing site

export interface SecurityIncident {
  date: string;
  title: string;
  description: string;
  severity: "critical" | "high" | "medium";
  packages?: string;
  downloads?: string;
}

export interface ComparisonRow {
  dimension: string;
  npm: string;
  foundry: string;
}

export interface BuildTarget {
  name: string;
  icon: string;
  description: string;
}

export interface StdLibModule {
  name: string;
  icon: string;
  description: string;
}

export interface BuildTime {
  tool: string;
  seconds: number;
  color: string;
}

export const SECURITY_INCIDENTS: SecurityIncident[] = [
  {
    date: "Sep 8, 2025",
    title: "Shai-Hulud Worm Phase 1",
    description:
      "First wave: 18 high-profile packages compromised including chalk and debug. Self-replicating worm targeting 25,000+ repositories. Steals cloud tokens, deploys secret-scanning tools.",
    severity: "critical",
    packages: "18 packages",
    downloads: "25,000+ repos targeted",
  },
  {
    date: "Aug 2025",
    title: "nx Package Attack",
    description:
      "Exploited CI workflow vulnerability. Gained elevated npm registry privileges. AWS admin access in 72 hours.",
    severity: "critical",
  },
  {
    date: "Jul 2025",
    title: "Gluestack Backdoor",
    description:
      "17 npm packages backdoored after maintainer account hijack. @react-native-aria/interactions (125,000 weekly downloads) compromised.",
    severity: "high",
    packages: "17 packages",
    downloads: "125,000 weekly",
  },
  {
    date: "Nov 2025",
    title: "Shai-Hulud 2.0",
    description:
      "Second wave. Shifted from post-install to pre-install execution. 2.6 billion weekly downloads collectively affected.",
    severity: "critical",
    downloads: "2.6B weekly downloads",
  },
  {
    date: "Dec 2025",
    title: "Critical Infrastructure Campaign",
    description:
      "27 malicious npm packages from 6 aliases targeting sales and commercial personnel at US critical infrastructure organizations.",
    severity: "critical",
    packages: "27 packages",
  },
  {
    date: "Mar 31, 2026",
    title: "axios Compromise",
    description:
      "UNC1069 (North Korea-nexus) compromised axios (100M+ weekly downloads). Injected WAVESHAPER.V2 backdoor affecting Windows, macOS, and Linux.",
    severity: "critical",
    downloads: "100M+ weekly downloads",
  },
  {
    date: "Mar 31, 2026",
    title: "Claude Code Source Leak",
    description:
      "513,000 lines of AI security internals exposed via Bun source map in npm package. Vidar malware distribution followed within hours.",
    severity: "critical",
  },
];

export const FOUNDRY_COMPARISON: ComparisonRow[] = [
  {
    dimension: "Identity",
    npm: "Username + password (phishable)",
    foundry: "Cryptographic keypair (not phishable)",
  },
  {
    dimension: "Versions",
    npm: "Mutable — `latest` tag changes",
    foundry: "Immutable, content-addressed",
  },
  {
    dimension: "Install scripts",
    npm: "Arbitrary code from strangers",
    foundry: "Blocked by default",
  },
  {
    dimension: "Name squatting",
    npm: "First-come-first-served",
    foundry: "Namespace scoped to author identity",
  },
  {
    dimension: "Audit trail",
    npm: "Opaque, mutable history",
    foundry: "Cryptographically verified chain",
  },
  {
    dimension: "Source maps",
    npm: "Accidentally published constantly",
    foundry: "Compiler controls what ships",
  },
  {
    dimension: "Dependency resolution",
    npm: "Mutable version ranges (^, ~)",
    foundry: "Exact content hashes",
  },
  {
    dimension: "Malware vectors",
    npm: "Post-install scripts, typosquatting",
    foundry: "No install scripts, namespaced",
  },
];

export const BUILD_TIMES: BuildTime[] = [
  { tool: "Webpack", seconds: 45, color: "#EF4444" },
  { tool: "Vite (esbuild)", seconds: 8, color: "#F97316" },
  { tool: "Turbopack", seconds: 4, color: "#EAB308" },
  { tool: "Forge (Oxc/Rust)", seconds: 0.8, color: "#06D6A0" },
];
