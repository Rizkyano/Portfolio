import { useNavigate, useLocation } from "react-router-dom";

const ProjectMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { label: "All", path: "/project" },
    { label: "Web", path: "/web" },
    { label: "Game", path: "/game" },
    { label: "Design", path: "/design" },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-4">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;

          return (
            <button
              key={tab.label}
              onClick={() => navigate(tab.path)}
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
