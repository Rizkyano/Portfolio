import React from "react";
import WebProject from "../containers/Project/webProject";
import ProjectMenu from "../components/ProjectMenu";

const ProjectWeb = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen">
      <div className="relative isolate px-6 pt-20 lg:px-8">
        {/* Background Shape Atas */}
        <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-1/2 w-[36rem] -translate-x-1/2 rotate-45 bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-400 opacity-30 sm:w-[72rem]"
          />
        </div>

        {/* Content */}
        <div className="mx-auto max-w-4xl py-10 sm:py-20 lg:py-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">Web Projects</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Crafting scalable, component-based interfaces with React and TypeScript. Powered by TailwindCSS for a modern and responsive look, and focusing on accessibility and UI/UX principles.
          </p>
          <div className="mt-6 text-lg leading-8 text-gray-600">
            <ProjectMenu />
          </div>
        </div>

        {/* Project Showcase */}
        <div className="flex flex-col items-center gap-12">
          <WebProject />
        </div>

        {/* Background Shape Bawah */}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-1/2 w-[36rem] -translate-x-1/2 rotate-45 bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-400 opacity-30 sm:w-[72rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectWeb;
