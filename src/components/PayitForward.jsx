import React from "react";

import certs from "../assets/trainingBg.png";

const PayitForward = () => {
  return (
    <div
      className="w-full h-full bg-cover bg-center relative rounded-2xl p-6 "
      style={{
        backgroundImage: `url(${certs})`,
        backgroundPosition: "60% 60%",
        backgroundSize: "150%",
      }}
    >
      <div className="text-[white text-[25px] font-bold text-white">
        Pay It Forward
      </div>
      <p className="mt-4 text-xs text-gray-300">
        I believe that success is more meaningful when shared. Through
        workshops, training, and mentorship, I aim to empower the next
        generation of developers and tech professionals by sharing the knowledge
        and experiences I’ve gained along my journey.
      </p>
    </div>
  );
};

export default PayitForward;
