import React from "react";
import ProjectMenu from "../components/ProjectMenu";

const Project = () => {
  return (
    <div className="bg-gradient-to-b from-white to-slate-100 min-h-screen">
      <div className="relative isolate px-6 pt-20 lg:px-8">
        {/* Background Top Blob */}
        <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-1/2 w-[36rem] -translate-x-1/2 rotate-45 bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-400 opacity-30 sm:w-[72rem]"
          />
        </div>

        {/* Section Title */}
        <div className="mx-auto max-w-4xl py-24 sm:py-32 lg:py-20 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">My Projects</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">From design to code, I've built and delivered user-focused digital experiences. Explore a range of work that merges clean UI, responsive web design, and creative vision.</p>
        </div>

        {/* Project Menu Section */}
        <div className="flex justify-center">
          <div className="w-full max-w-5xl p-6 bg-white rounded-2xl shadow-xl">
            <ProjectMenu />
          </div>
        </div>

        {/* Background Bottom Blob */}
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

export default Project;
