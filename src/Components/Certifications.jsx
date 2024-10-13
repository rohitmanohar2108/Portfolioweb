import React from "react";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="min-h-screen bg-[url('https://images.unsplash.com/photo-1618224619763-c26996a38420?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center p-8 text-white"
    >
      <h2 className="text-4xl font-bold mb-6">Certifications</h2>
      <ul className="list-disc ml-5">
        <li>Certification 1 - React Developer</li>
        <li>Certification 2 - Cloud Computing</li>
        <li>Certification 3 - Data Science</li>
      </ul>
    </section>
  );
};

export default Certifications;
