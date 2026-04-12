import { Hammer } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-forge-steel/30 backdrop-blur-md bg-forge-iron/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-forge-orange/20 border border-forge-orange/40">
              <Hammer size={18} className="text-forge-orange" />
            </div>
            <span className="text-xl font-bold text-forge-orange tracking-tight">
              forge
            </span>
            <span className="ml-2 px-1.5 py-0.5 text-xs font-semibold bg-forge-amber/20 text-forge-amber border border-forge-amber/30 rounded-full">
              Pre-Alpha
            </span>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-forge-white/70 hover:text-forge-white text-sm transition-colors"
            >
              Docs
            </a>
            <a
              href="#"
              className="text-forge-white/70 hover:text-forge-white text-sm transition-colors"
            >
              Foundry
            </a>
            <a
              href="https://github.com/100monkeys-ai/forgejs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forge-white/70 hover:text-forge-white text-sm transition-colors"
            >
              GitHub
            </a>
          </nav>

          {/* CTA */}
          <a
            href="#get-started"
            className="px-4 py-2 text-sm font-semibold bg-forge-orange text-white rounded-lg hover:bg-forge-rust transition-colors shadow-lg shadow-forge-orange/20"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
