import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[url('https://images.unsplash.com/photo-1593371256584-ac70d0ab43d1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center p-8 text-white"
    >
      <h2 className="text-4xl font-bold mb-6">Skills</h2>
      <ul className="list-disc ml-5">
        <li>React</li>
        <li>JavaScript</li>
        <li>CSS</li>
        <li>Tailwind CSS</li>
        <li>Node.js</li>
      </ul>
    </section>
  );
};

export default Skills;
