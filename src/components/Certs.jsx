import React from "react";
import certs from "../assets/certs.png";

const Certs = () => {
  return (
    <div
      className=" bg-[#383535] w-full h-full bg-cover bg-center relative rounded-2xl p-6 "
      style={{
        backgroundImage: `url(${certs})`,
        backgroundPosition: "30% 10%",
        backgroundSize: "150%",
      }}
    >
      <div className="text-[white text-[25px] font-bold text-white">
        Certificates
      </div>
    </div>
  );
};

export default Certs;
