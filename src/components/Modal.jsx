import { useEffect } from "react";

export default function Modal({ project, onClose }) {
  useEffect(() => {
    if (!project) return; // don't touch scroll/keys when nothing is open

    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/75 flex items-start justify-center px-4 py-[6vh] overflow-y-auto"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-surfaceRaised border border-border rounded-xl max-w-[680px] w-full overflow-hidden animate-[modalIn_0.22s_ease]">
        <div className="relative px-8 pt-9 pb-6 bg-gradient-to-br from-accent/20 to-bg/40">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-bg/80 border border-border text-lg leading-none"
          >
            &times;
          </button>
          <div className="text-[11px] tracking-wider uppercase text-accent font-bold">
            {project.category}
          </div>
          <h2 className="font-display text-4xl mt-1.5 mb-2.5">{project.title}</h2>
          <p className="text-[#d8d8d4] text-sm leading-relaxed">{project.synopsis}</p>
        </div>

        <div className="px-8 pb-8 pt-6">
          <div className="inline-flex flex-col bg-surface border border-border rounded-md px-4.5 py-2.5 mb-5">
            <span className="font-display text-3xl text-accent leading-none">{project.stat.value}</span>
            <span className="text-[11px] text-muted uppercase tracking-wide mt-1">{project.stat.label}</span>
          </div>

          <ul className="list-disc pl-4.5 text-sm leading-relaxed text-[#d8d8d4] mb-5 space-y-1.5">
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.stack.map((s) => (
              <span key={s} className="border border-border px-2.5 py-0.5 rounded text-xs">
                {s}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded bg-accent hover:bg-[#ff4b58] transition-colors font-semibold"
            >
              View on GitHub
            </a>
            <button
              onClick={onClose}
              className="px-6 py-3 rounded bg-white/10 hover:bg-white/20 transition-colors font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}