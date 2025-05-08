import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProjectMenu = () => {
  const [activeTab, setActiveTab] = useState("Web");
  const navigate = useNavigate();

  const tabs = [
    { label: "All", path: "/" },
    { label: "Web", path: "/web" },
    { label: "Game", path: "/game" },
    { label: "Design", path: "/design" },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.label;

          return (
            <button
              key={tab.label}
              onClick={() => {
                setActiveTab(tab.label);
                navigate(tab.path);
              }}
              className={`px-6 py-3 rounded-full text-sm sm:text-base font-medium transition duration-300 
                ${isActive ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-black"}`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectMenu;
