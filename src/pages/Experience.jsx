import React from "react";
import { motion } from "framer-motion";
import ExperienceBox from "../components/Experience";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Project = () => {
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

          <div className="mx-auto max-w-5xl py-10 sm:py-10 lg:py-5">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-12">
              <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl relative inline-block">
                <span className="relative z-10">✨ Experience</span>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-indigo-500 rounded-full"></span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">I have hands-on experience in graphic design through internships and freelance work, contributing to diverse projects and creative strategies.</p>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.3 }} className="flex flex-col lg:flex-row items-start gap-10">
              <div className="w-full">
                <div className="bg-gray-50 rounded-2xl p-6 shadow-md transition hover:shadow-xl duration-300 border border-gray-100">
                  <p className="text-gray-700 leading-relaxed text-md">
                    At <strong>O2 Consulting</strong>, I created visual materials such as business proposals, Instagram content, posters, and infographics to support branding strategies. During my internship at <strong>More Design</strong>,
                    I designed digital posters, banners, price tags, and event materials. As a freelance designer for <strong>Intonate</strong>, I developed logos, digital posters, and visual content for Instagram. These roles refined my
                    visual storytelling and design consistency across platforms.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.6 }} className="mt-14">
              <ExperienceBox />
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

export default Project;
