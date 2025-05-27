import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
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
          {/* Konten utama */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="mx-auto max-w-2xl py-5 sm:py-5 lg:py-5 text-center">
            <h1 className="text-balance text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">Welcome to Rizkyano's Portfolio</h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">Front End Web Developer | Game Devloper | Graphic Design</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="https://drive.usercontent.google.com/download?id=10Jg4n9zlBv7z6fqo96TXGU_cHAyheSnR&export=download&authuser=0&confirm=t&uuid=542ed22e-7101-4293-be05-74edd4c59910&at=ALoNOgmjjrq4Ltep9P4lmQjtWCW4:1748154759981"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Download CV
              </Link>
              <Link to="/about" className="text-sm/6 font-semibold text-gray-900">
                About me <span aria-hidden="true">→</span>
              </Link>
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

export default Hero;
