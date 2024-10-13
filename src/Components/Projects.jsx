import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[url('https://images.unsplash.com/photo-1628771791803-7ee290de9893?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center p-8 text-white"
    >
      <h2 className="text-4xl font-bold mb-6">Projects</h2>
      <p>Here are some of my projects:</p>
      <ul className="list-disc ml-5">
        <li>Project 1 - Web Development</li>
        <li>Project 2 - React App</li>
        <li>Project 3 - API Integration</li>
      </ul>
    </section>
  );
};

export default Projects;
