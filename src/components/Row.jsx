import Card from "./Card";

export default function Row({ title, subtitle, projects, onOpen }) {
  if (!projects.length) return null;
  return (
    <section className="mb-11">
      <div className="flex items-baseline justify-between px-[4vw] mb-3">
        <h2 className="text-xl font-bold">{title}</h2>
        {subtitle && <span className="text-sm text-muted">{subtitle}</span>}
      </div>
      <div className="row-track flex gap-3.5 overflow-x-auto px-[4vw] pb-5 pt-1 snap-x snap-proximity">
        {projects.map((p) => (
          <Card key={p.id} project={p} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}