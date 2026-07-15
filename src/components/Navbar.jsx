import { Link } from "react-router-dom";
import { PROFILE } from "../data";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[4vw] py-4 bg-gradient-to-b from-bg/90 to-transparent">
      <Link to="/" className="font-display text-2xl tracking-wide text-accent">
        ANIRUDDH
      </Link>
      <ul className="flex items-center gap-7 text-sm">
        <li><Link to="/projects" className="opacity-85 hover:opacity-100">Projects</Link></li>
        <li><Link to="/experience" className="opacity-85 hover:opacity-100">Experience</Link></li>
        <li><Link to="/education" className="opacity-85 hover:opacity-100">Education</Link></li>
        <li>
          <Link
            to="/contact"
            className="px-5 py-2 rounded bg-white/10 hover:bg-white/20 transition-colors"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}