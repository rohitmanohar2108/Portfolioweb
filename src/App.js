import React, { useState } from "react";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Certifications from "./Components/Certifications";
import Introduction from "./Components/Introduction";
import Loader from "./Components/Loader"

function App() {
  const [loading, setLoading] = useState(true); // State to control loading

  return (
    <div className="">
      {loading && <Loader setLoading={setLoading} />} 
      {!loading && (  
        <>
          <Header />
          <main>
            <Introduction />
            <Skills />
            <Education />
            <Projects />
            <Certifications />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
