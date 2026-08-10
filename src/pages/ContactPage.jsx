import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PROFILE } from "../data";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg text-text font-body flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-display text-4xl mb-3">Get in touch</h1>
        <p className="text-[#d8d8d4] mb-6">
          Open to Software Development and AI Engineering roles, with a primary focus on backend systems, distributed systems, and applied AI.
        </p>
        <a
          href={`mailto:${PROFILE.email}`}
          className="text-2xl font-semibold text-accent hover:underline mb-6"
        >
          {PROFILE.email}
        </a>
        <div className="flex gap-4">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded bg-white/10 hover:bg-white/20 transition-colors font-semibold"
          >
            GitHub ↗
          </a>
          {PROFILE.linkedin !== "#" && (
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded bg-white/10 hover:bg-white/20 transition-colors font-semibold"
            >
              LinkedIn ↗
            </a>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}