import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { EXPERIENCE } from "../data";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-bg text-text font-body flex flex-col">
      <Navbar />
      <main className="flex-1 px-[4vw] pt-[16vh] pb-[8vh] max-w-3xl mx-auto w-full">
        <h1 className="font-display text-4xl mb-1.5">{EXPERIENCE.role}</h1>
        <div className="text-muted text-sm mb-6">
          {EXPERIENCE.company} · {EXPERIENCE.dates}
        </div>
        <p className="text-[#d8d8d4] text-[15px] leading-relaxed">{EXPERIENCE.synopsis}</p>
        <ul className="list-disc pl-4.5 mt-4 text-[#d8d8d4] text-sm leading-relaxed space-y-2">
          {EXPERIENCE.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}