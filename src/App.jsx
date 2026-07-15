import { Routes, Route } from "react-router-dom";
import ProfileGate from "./pages/ProfileGate";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ProfileGate />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}