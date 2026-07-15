import { useNavigate } from "react-router-dom";

const PROFILES = [
  {
    path: "/about",
    label: "About",
    color: "bg-[#e63946]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-9 h-9">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.5-6 8-6s8 2 8 6" />
      </svg>
    ),
  },
  {
    path: "/experience",
    label: "Experience",
    color: "bg-[#3a86ff]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-9 h-9">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
  {
    path: "/projects",
    label: "Projects",
    color: "bg-[#e63946]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-9 h-9">
        <path d="M4 6a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z" />
      </svg>
    ),
  },
  {
    path: "/education",
    label: "Education and Skills",
    color: "bg-[#ffb703]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-9 h-9">
        <path d="M2 9 12 4l10 5-10 5-10-5Z" />
        <path d="M6 11.5V17c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" />
      </svg>
    ),
  },
  {
    path: "/contact",
    label: "Contact",
    color: "bg-[#c084fc]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-9 h-9">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
];

export default function ProfileGate() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-4">
      <h1 className="font-display text-4xl md:text-5xl tracking-wide mb-12 text-[#d8d8d4]">
        Who's exploring?
      </h1>
      <div className="flex justify-center gap-6 flex-wrap max-w-3xl">
        {PROFILES.map((p) => (
          <button
            key={p.path}
            onClick={() => navigate(p.path)}
            className="group flex flex-col items-center gap-3 w-28"
          >
            <div
              className={`w-24 h-24 rounded-md ${p.color} flex items-center justify-center text-bg
                          transition-transform duration-200 group-hover:scale-105
                          group-hover:ring-4 group-hover:ring-white/80`}
            >
              {p.icon}
            </div>
            <span className="text-sm text-muted group-hover:text-text transition-colors">
              {p.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}