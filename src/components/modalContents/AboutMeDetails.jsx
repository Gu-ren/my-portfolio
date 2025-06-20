import React from 'react'

const AboutMeDetails = () => {
     return (
        <div className="  flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold mb-4 text-[#383535]">About Me</h2>
          <p className="text-lg text-gray-700 text-center max-w-2xl">
            Here’s a deep dive into the projects I've worked on, including technologies, goals, and outcomes.
          </p>
          {/* You can add project cards, images, timelines here */}
        </div>
      );
    };

export default AboutMeDetails