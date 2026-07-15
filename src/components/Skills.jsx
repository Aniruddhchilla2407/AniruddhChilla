import { SKILL_ROWS } from "../data";

export default function Skills() {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Skills</h2>
      {SKILL_ROWS.map((group) => (
        <div key={group.label} className="mb-6">
          <div className="text-xs tracking-wider uppercase text-muted mb-2.5">{group.label}</div>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="border border-border bg-surface px-3.5 py-1.5 rounded-full text-sm text-[#d8d8d4]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}