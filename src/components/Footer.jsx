import { PROFILE } from "../data";

export default function Footer() {
  return (
    <footer className="px-[4vw] py-[6vh] border-t border-border text-muted text-sm flex flex-wrap justify-between gap-3">
      <span>&copy; {new Date().getFullYear()} {PROFILE.name} · Built with React + Tailwind</span>
      <span>
        <a href={`mailto:${PROFILE.email}`} className="underline hover:text-text">Email</a>
        {" · "}
        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="underline hover:text-text">
          GitHub
        </a>
      </span>
    </footer>
  );
}