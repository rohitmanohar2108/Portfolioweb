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
    <div className="">
      <Header />
      <main>
        <Introduction />
        <Skills />
        <Education />
        <Projects />
        <Certifications />
        <Contact />
        
      </main>
    </div>
  );
}

export default App;
