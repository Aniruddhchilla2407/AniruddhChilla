import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import { EDUCATION } from "../data";

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-bg text-text font-body flex flex-col">
      <Navbar />
      <main className="flex-1 px-[4vw] pt-[16vh] pb-[8vh] max-w-3xl mx-auto w-full">
        <h1 className="font-display text-4xl mb-1.5">{EDUCATION.school}</h1>
        <div className="text-muted text-sm mb-6">
          {EDUCATION.degree} · {EDUCATION.dates}
        </div>
        <p className="text-[#d8d8d4] text-[15px] leading-relaxed">{EDUCATION.detail}</p>
        <p className="text-muted text-sm mt-4 mb-12">{EDUCATION.coursework}</p>

        <Skills />
      </main>
      <Footer />
    </div>
  );
}