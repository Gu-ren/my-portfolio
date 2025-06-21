import React from "react";
import FlignoLogo from "../assets/flignoLogo.png"
import ZenithLogo from "../assets/zenithLogo.png"
import WhiteGloveLogo from "../assets/whiteGloveLogo.png"

const CareerOverview = () => {
  const timelineData = [
    {
      time: "April 2024 - Present",
      title: "Zenith Technologies, Assoc. Project Manager",
      logo: ZenithLogo,
      description:
        "Oversee strategic planning, business development, and project execution. Lead project management efforts, ensuring agile workflows, resource allocation, and deadline adherence.",
    },
    {
      time: "March 2023 - March 2025",
      title: "Fligno Software Philippines Inc., Associate Software Engineer",
      logo: FlignoLogo,
      description:
        "Design, develop, and implement software solutions. Participate in the full software development lifecycle. Contribute to technical discussions, and work with QA to ensure quality.",
    },
    {
      time: "April 2022 - August 2022",
      title: "White Glove Management",
      logo: WhiteGloveLogo,
      description:
        "Conducted product research and market analysis. Developed and executed sales strategies. Collaborated with teams to enhance business processes.",
    },
  ];

  const TimelineItem = ({ item, isLast }) => (
    <div className="flex gap-x-3">
      <div className="min-w-28 text-end">
        <span className="text-xs text-gray-500 ">{item.time}</span>
      </div>
      <div
        className={`relative ${
          isLast
            ? ""
            : "after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200"
        }`}
      >
        <div className="relative z-10 size-7 flex justify-center items-center">
          <div className="size-2 rounded-full bg-gray-400"></div>
        </div>
      </div>
      <div className="grow pt-0.5 pb-8">
        <div className="flex items-center gap-x-2">
          {item.logo && (
            <img
              src={item.logo}
              alt={`${item.title} logo`}
              className="w-6 h-6 object-contain rounded"
            />
          )}
          <h3 className="font-semibold text-gray-800">{item.title}</h3>
        </div>
        {item.description && (
          <p className="mt-1 text-xs text-gray-500 whitespace-pre-line">{item.description}</p>
        )}
      </div>
    </div>
  );

  return (
    <div
      className="w-full h-full bg-cover bg-center relative rounded-2xl p-6"
    //   style={{
    //     backgroundImage: `url(${conf})`,
    //     backgroundSize: "120%",
    //   }}
    >
      <div className="text-[#383535] text-[25px] font-bold">Career Overview</div>
      <div className="py-2">
        {timelineData.map((item, idx) => (
          <TimelineItem key={idx} item={item} isLast={idx === timelineData.length - 1} />
        ))}
      </div>
    </div>
  );
};

export default CareerOverview;
