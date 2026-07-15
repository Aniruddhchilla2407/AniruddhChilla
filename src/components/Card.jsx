export default function Card({ project, onOpen }) {
  return (
    <button
      onClick={() => onOpen(project.id)}
      className="group flex-none w-[260px] h-[150px] rounded-md bg-surface border border-border p-4 text-left
                 flex flex-col justify-between overflow-hidden relative
                 transition-transform duration-200 ease-out
                 hover:-translate-y-1.5 hover:scale-[1.035] hover:border-accentDim
                 hover:shadow-[0_18px_32px_rgba(0,0,0,0.45)] hover:z-10 snap-start"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200
                   bg-gradient-to-br from-accent/15 to-transparent pointer-events-none"
      />
      <div className="relative">
        <div className="text-[11px] tracking-wider uppercase text-accent font-bold">
          {project.category}
        </div>
        <div className="font-display text-2xl leading-none mt-1 mb-1.5">{project.title}</div>
        <div className="text-xs text-muted leading-snug line-clamp-2">{project.logline}</div>
      </div>
      <div className="relative flex items-center justify-between text-[11px]">
        <span className="text-matchGreen font-bold">{project.match}% Match</span>
        <span className="text-muted">{project.stack[0]}</span>
      </div>
    </button>
  );
}