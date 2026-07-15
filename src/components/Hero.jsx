import { PROJECTS, HERO_PROJECT_ID } from "../data";

export default function Hero({ onOpen }) {
  const hero = PROJECTS.find((p) => p.id === HERO_PROJECT_ID) || PROJECTS[0];

  return (
    <header className="relative min-h-[88vh] flex items-end px-[4vw] pb-[8vh] overflow-hidden bg-[radial-gradient(ellipse_at_30%_20%,rgba(230,57,70,0.16),transparent_55%),linear-gradient(160deg,#1a1a1d_0%,#0b0b0d_65%)]">
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-bg/75 pointer-events-none" />
      <div className="relative max-w-2xl">
        <div className="text-accent font-bold text-xs tracking-[3px] uppercase mb-3">
          Featured Project · {hero.category}
        </div>
        <h1 className="font-display text-[clamp(48px,9vw,96px)] leading-[0.92] mb-4">
          {hero.title}
        </h1>
        <p className="text-lg leading-relaxed text-[#d8d8d4] mb-5 max-w-lg">
          {hero.logline}
        </p>
        <div className="flex items-center gap-4 mb-7 text-sm text-muted">
          <span className="text-matchGreen font-bold">{hero.match}% Match</span>
          {hero.stack.slice(0, 3).map((s) => (
            <span key={s} className="border border-border px-2.5 py-0.5 rounded text-xs">
              {s}
            </span>
          ))}
        </div>
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => onOpen(hero.id)}
            className="px-6 py-3 rounded bg-text text-[#111] font-semibold hover:bg-[#d8d8d4] transition-colors"
          >
            ▶ View Case Study
          </button>
          <a
            href={hero.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded bg-white/10 hover:bg-white/20 transition-colors font-semibold"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </header>
  );
}