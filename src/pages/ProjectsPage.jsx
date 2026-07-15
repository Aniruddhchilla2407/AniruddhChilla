import { useState } from "react";
import Navbar from "../components/Navbar";
import Row from "../components/Row";
import Modal from "../components/Modal";
import Footer from "../components/Footer";
import { PROJECTS } from "../data";

export default function ProjectsPage() {
  const [activeId, setActiveId] = useState(null);
  const activeProject = PROJECTS.find((p) => p.id === activeId) || null;

  const systems = PROJECTS.filter((p) => ["Systems", "Distributed Systems"].includes(p.category));
  const concurrency = PROJECTS.filter((p) => ["Concurrency", "Developer Tooling"].includes(p.category));

  return (
    <div className="min-h-screen bg-bg text-text font-body">
      <Navbar />
      <main className="pt-[14vh] pb-[8vh]">
        <Row title="Featured Projects" subtitle={`${PROJECTS.length} projects`} projects={PROJECTS} onOpen={setActiveId} />
        <Row title="Because you like Systems Programming" projects={systems} onOpen={setActiveId} />
        <Row title="Because you like Concurrency & Infra" projects={concurrency} onOpen={setActiveId} />
      </main>
      <Footer />
      <Modal project={activeProject} onClose={() => setActiveId(null)} />
    </div>
  );
}