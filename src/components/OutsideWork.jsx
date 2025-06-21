import React from "react";
import certs from "../assets/outsideWorkBg.png";
import OW from "../assets/OW.png";

const OutsideWork = () => {
  return (
    <div
      className=" bg-[#383535] w-full h-full bg-cover bg-center relative rounded-2xl flex items-center justify-center "
      style={{
        backgroundImage: `url(${certs})`,
        backgroundPosition: "30% 65%",
        backgroundSize: "120%",
      }}
    >
      <div
  className="absolute"
  style={{
    backgroundImage: `url(${OW})`,
    backgroundPosition: "30% 65%",
    backgroundSize: "120%",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
  }}
/>


      <div className="text-[white text-[70px] font-bold text-white p-6">
        Outside Work
      </div>
    </div>
  );
};

export default OutsideWork;
