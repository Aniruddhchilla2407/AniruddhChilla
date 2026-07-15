import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PROFILE, ABOUT } from "../data";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg text-text font-body flex flex-col">
      <Navbar />
      <main className="flex-1 px-[4vw] pt-[16vh] pb-[8vh] max-w-2xl mx-auto w-full">
        <h1 className="font-display text-4xl mb-1.5">{PROFILE.name}</h1>
        <p className="text-muted text-sm mb-8">{PROFILE.tagline}</p>

        <p className="text-[#d8d8d4] text-[15px] leading-relaxed mb-8">
          {ABOUT.intro}
        </p>

        <h2 className="text-xs tracking-wider uppercase text-accent font-bold mb-3">
          What I'm interested in
        </h2>
        <ul className="list-disc pl-4.5 text-[#d8d8d4] text-sm leading-relaxed space-y-2 mb-8">
          {ABOUT.interests.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2 className="text-xs tracking-wider uppercase text-accent font-bold mb-3">
          Currently looking for
        </h2>
        <p className="text-[#d8d8d4] text-sm leading-relaxed">
          {ABOUT.roles}
        </p>
      </main>
      <Footer />
    </div>
  );
}