import React from "react";
import conf from "../assets/conf.png";

const ConfNet = () => {
  return (
    <div
      className="w-full h-full bg-cover bg-center relative rounded-2xl p-6"
      style={{ backgroundImage: `url(${conf})`, backgroundPosition: "40% 80%" }}
    >
      <div className="text-[white text-[50px] font-bold text-white">
        Conference & Networking
      </div>
      <p className="mt-4 text-sm text-gray-300">
        I actively participate in industry conferences, tech meetups, and
        startup events to expand my knowledge, grow my network, and share my
        passion for technology and innovation. Here are some highlights from my
        journey:
      </p>
    </div>
  );
};

export default ConfNet;
