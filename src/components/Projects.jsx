import React from "react";
import ProjectsBg from "../assets/projects.png";
const Projects = () => {
  return (
    <div
    className="w-full min-h-[450px] bg-no-repeat bg-[length:60%] bg-bottom rounded-2xl p-6"
    style={{
      backgroundImage: `url(${ProjectsBg})`,
    }}
  >
  
      <div className="text-[#383535] text-[50px] font-bold">Projects</div>
      <p className="mt-4 text-sm text-gray-500">
        A curated selection of the projects I've worked on, showcasing my skills
        in full-stack development, API integration, UI/UX design, and
        problem-solving. These projects reflect my passion for building
        real-world solutions with clean code and thoughtful design.
      </p>
    </div>
  );
};

export default Projects;
