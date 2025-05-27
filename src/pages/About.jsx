import React from "react";
import { motion } from "framer-motion";
import Education from "../components/Education";
import Profile from "../assets/Profile/Profile.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const About = () => {
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
          <div className="mx-auto max-w-6xl py-5 sm:py-5 lg:py-5">
            {/* Profil Section */}
            <motion.div className="flex flex-col md:flex-row items-center md:items-start gap-10" initial="hidden" animate="visible" variants={fadeInUp}>
              <img src={Profile} alt="Profile" className="w-48 h-48 rounded-full object-cover shadow-lg border border-gray-300 hover:scale-105 transition duration-300" />

              <div className="text-left">
                <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl relative">
                  Hi! I'm Rizkyano
                  <span className="block w-16 h-1 bg-indigo-500 mt-4 rounded-full"></span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-4xl">
                  I'm a passionate designer with a knack for transforming ideas into engaging visuals. From marketing materials to brand identities, I enjoy blending creativity with strategy to deliver impactful designs.
                </p>
                <div className="mt-6">
                  <Link
                    to="https://drive.usercontent.google.com/download?id=10Jg4n9zlBv7z6fqo96TXGU_cHAyheSnR&export=download&authuser=0&confirm=t&uuid=542ed22e-7101-4293-be05-74edd4c59910&at=ALoNOgmjjrq4Ltep9P4lmQjtWCW4:1748154759981"
                    className="inline-block text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition px-5 py-2 rounded-full"
                  >
                    Download CV →
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div className="mt-20" initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.3 }}>
              <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-indigo-500 inline-block mb-8">Education</h2>
              <Education />
            </motion.div>
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
    </div>
  );
};

export default About;
