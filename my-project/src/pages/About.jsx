import React from "react";
import { motion } from "framer-motion";
import Education from "../components/Education";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const About = () => {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Background Gradient Top */}
        <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-300 to-indigo-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="mx-auto max-w-6xl py-24 sm:py-32 lg:py-20">
          {/* Profil Section */}
          <motion.div className="flex flex-col md:flex-row items-center md:items-start gap-10" initial="hidden" animate="visible" variants={fadeInUp}>
            <img src="/image.png" alt="Profile" className="w-48 h-48 rounded-full object-cover shadow-lg border border-gray-300 hover:scale-105 transition duration-300" />

            <div className="text-left">
              <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl relative">
                Hi! I'm Rizkyano
                <span className="block w-16 h-1 bg-indigo-500 mt-4 rounded-full"></span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-xl">
                I'm a passionate designer with a knack for transforming ideas into engaging visuals. From marketing materials to brand identities, I enjoy blending creativity with strategy to deliver impactful designs.
              </p>
              <div className="mt-6">
                <a href="#" className="inline-block text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition px-5 py-2 rounded-full">
                  Download CV →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div className="mt-20" initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.3 }}>
            <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-indigo-500 inline-block mb-8">Education</h2>
            <Education />
          </motion.div>
        </div>

        {/* Background Gradient Bottom */}
        <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-pink-300 to-indigo-300 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
