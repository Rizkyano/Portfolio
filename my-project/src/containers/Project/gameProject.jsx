import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import TotoKromo from "../../assets/game/TotoKromo.png";
import MazeOut from "../../assets/game/MazeOut.png";
import Flea from "../../assets/game/Flea.png";
import JalanJalan from "../../assets/game/Jalan-Jalan.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import ProjectMenu from "../../components/ProjectMenu";

function gameProject() {
  return (
    <div className="w-full max-w-5xl p-6 bg-white rounded-2xl shadow-xl">
      {/* Swiper Carousel */}
      <Swiper modules={[Navigation]} spaceBetween={30} slidesPerView={1} navigation>
        <SwiperSlide>
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">🚀 Toto Kromo</h3>
          <div className="mt-8 mx-5 text-center overflow-hidden">
            <img src={TotoKromo} alt="Project Screenshot 1" className="w-full max-w-3xl h-80 object-cover rounded-xl shadow-md mx-auto" />
            <p className="text-lg mt-8 mx-20 text-gray-600">A sleek, responsive e-commerce website built with React, featuring product catalogs, shopping carts, and secure checkout processes, integrated with TailwindCSS for a modern UI.</p>
            <div className="mt-6">
              <a
                href="https://drive.google.com/file/d/1N3VKk4NtAK4qtAJa-HPWngKmKwyobBf3/view?usp=sharing+"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition"
              >
                Download Game
                <span className="ml-2 text-xl">→</span>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">🚀 Maze Out</h3>
          <div className="mt-8 mx-5 text-center overflow-hidden">
            <img src={MazeOut} alt="Project Screenshot 1" className="w-full max-w-3xl h-80 object-cover rounded-xl shadow-md mx-auto" />
            <p className="text-lg mt-8 mx-20 text-gray-600">A sleek, responsive e-commerce website built with React, featuring product catalogs, shopping carts, and secure checkout processes, integrated with TailwindCSS for a modern UI.</p>
            <div className="mt-6">
              <a
                href="https://drive.google.com/file/d/1AwNXWw4r2G7hrgcd1XAu3O8Hl1LcDph5/view?usp=sharing"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition"
              >
                Download Game
                <span className="ml-2 text-xl">→</span>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">🚀 Flea</h3>
          <div className="mt-8 mx-5 text-center overflow-hidden">
            <img src={Flea} alt="Project Screenshot 1" className="w-full max-w-3xl h-80 object-cover rounded-xl shadow-md mx-auto" />
            <p className="text-lg mt-8 mx-20 text-gray-600">A sleek, responsive e-commerce website built with React, featuring product catalogs, shopping carts, and secure checkout processes, integrated with TailwindCSS for a modern UI.</p>
            <div className="mt-6">
              <a
                href="https://drive.google.com/file/d/1G045EjPPjQZF5b-oB6vdwxi00m0QqFEg/view?usp=sharing"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition"
              >
                Download Game
                <span className="ml-2 text-xl">→</span>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">🚀 Jalan-Jalan</h3>
          <div className="mt-8 mx-5 text-center overflow-hidden">
            <img src={JalanJalan} alt="Project Screenshot 1" className="w-full max-w-3xl h-80 object-cover rounded-xl shadow-md mx-auto" />
            <p className="text-lg mt-8 mx-20 text-gray-600">A sleek, responsive e-commerce website built with React, featuring product catalogs, shopping carts, and secure checkout processes, integrated with TailwindCSS for a modern UI.</p>
            <div className="mt-6">
              <a
                href="https://drive.google.com/file/d/1bEfi33fbHH0_qrjRnQpmWGDtm4OaU08s/view?usp=sharing"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition"
              >
                Download Game
                <span className="ml-2 text-xl">→</span>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default gameProject;
