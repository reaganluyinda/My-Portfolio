import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Education from "./components/education";

function App() {
  return (
    <main className="mx-auto max-w-7xl overflow-x-hidden antialiased">
      <div className="bg-image fixed inset-0 bg-cover bg-fixed bg-center"></div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Education />
      </div>
    </main>
  );
}

export default App;
