import React from "react";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Certifications from "./Components/Certifications";
import Introduction from "./Components/Introduction";

function App() {
  return (
    <div className="font-sans bg-gradient-to-r from-black via-blue-900 to-black min-h-screen">
      <Header />
      <main>
        <Introduction />
        <Skills />
        <Education />
        <Projects />
        <Contact />
        <Certifications />
      </main>
    </div>
  );
}

export default App;
