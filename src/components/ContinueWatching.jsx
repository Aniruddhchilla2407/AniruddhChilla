import { CONTINUE_WATCHING } from "../data";

export default function ContinueWatching({ onOpen }) {
  if (!CONTINUE_WATCHING.length) return null;

  return (
    <section className="mb-11">
      <div className="flex items-baseline justify-between px-[4vw] mb-3">
        <h2 className="text-xl font-bold">Currently Working</h2>
        <span className="text-sm text-muted">in progress</span>
      </div>
      <div className="row-track flex gap-3.5 overflow-x-auto px-[4vw] pb-5 pt-1 snap-x snap-proximity">
        {CONTINUE_WATCHING.map((item) => (
          <button
            key={item.id}
            onClick={() => onOpen(item.projectId)}
            className="flex-none w-[260px] rounded-md bg-surface border border-border p-4 snap-start text-left
                       transition-transform duration-200 ease-out
                       hover:-translate-y-1.5 hover:scale-[1.035] hover:border-accentDim
                       hover:shadow-[0_18px_32px_rgba(0,0,0,0.45)]"
          >
            <div className="text-[11px] tracking-wider uppercase text-accent font-bold mb-1.5">
              Currently Working On
            </div>
            <div className="font-display text-xl leading-none mb-1.5">{item.title}</div>
            <div className="text-xs text-muted leading-snug mb-3">{item.note}</div>

            <div className="h-1 w-full bg-border rounded-full overflow-hidden">
              <div
                className="h-full bg-accent rounded-full"
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}