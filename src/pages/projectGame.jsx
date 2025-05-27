import React from "react";
import GameProject from "../containers/Project/gameProject";
import ProjectMenu from "../components/ProjectMenu";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const ProjectGame = () => {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Top Gradient Background */}
        <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-300 to-indigo-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
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
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-12">
            <div className="mx-auto max-w-4xl py-5 sm:py-5 lg:py-5 text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">Game Projects</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Immersive 2D/3D Game Projects built with Unity & C# and other game engine technologies such as contruct, featuring engaging gameplay mechanics. Integrated with intuitive UI/UX and responsive controls to ensure a seamless
                player experience.
              </p>
              <div className="mt-6 text-lg leading-8 text-gray-600">
                <ProjectMenu />
              </div>
            </div>
          </motion.div>

          {/* Project Showcase */}
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.3 }}>
            <div className="flex flex-col items-center gap-12">
              <GameProject />
            </div>
          </motion.div>

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
    </div>
  );
};

export default ProjectGame;
