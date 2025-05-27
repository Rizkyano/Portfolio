import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import image1 from "../../assets/web/image1.png";
import Design from "../../assets/Design/Design.png";
import TotoKromo from "../../assets/game/TotoKromo.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
// import ProjectMenu from "../../components/ProjectMenu";

function allProject() {
  return (
    <div className="w-full max-w-5xl p-6 bg-white rounded-2xl shadow-xl">
      {/* Swiper Carousel */}

      <Swiper modules={[Navigation]} spaceBetween={30} slidesPerView={1} navigation autoHeight={true}>
        <SwiperSlide>
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">🚀 Web Developer</h3>
          <div className="mt-8 mx-5 text-center overflow-hidden">
            <img src={image1} alt="Project Screenshot 1" className="w-full max-w-3xl h-80 object-cover rounded-xl shadow-md mx-auto" />
            <p className="text-lg mt-8 mx-20 text-gray-600">A sleek, responsive e-commerce website built with React, featuring product catalogs, shopping carts, and secure checkout processes, integrated with TailwindCSS for a modern UI.</p>
            <div className="mt-6">
              <Link to="/web" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition">
                See More Projects
                <span className="ml-2 text-xl">→</span>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">🎮 Game Developer</h3>
          <div className="mt-8 mx-5 text-center overflow-hidden">
            <img src={TotoKromo} alt="Project Screenshot 1" className="w-full max-w-3xl h-80 object-cover rounded-xl shadow-md mx-auto" />
            <p className="text-lg mt-8 mx-20 text-gray-600">
              Immersive 2D/3D Game Projects built with Unity & C# and other game engine technologies such as contruct, featuring engaging gameplay mechanics. Integrated with intuitive UI/UX and responsive controls to ensure a seamless
              player experience.
            </p>
            <div className="mt-6">
              <Link to="/game" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition">
                See More Projects
                <span className="ml-2 text-xl">→</span>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">🎨 Design</h3>
          <div className="mt-8 mx-5 text-center overflow-hidden">
            <img src={Design} alt="Project Screenshot 1" className="w-full max-w-3xl h-80 object-cover rounded-xl shadow-md mx-auto" />
            <p className="text-lg mt-8 mx-20 text-gray-600">
              A visually striking graphic design portfolio showcasing branding, posters, digital illustrations, and social media content, crafted using Adobe Photoshop, and Illustrator. Features bold compositions, cohesive color theory, and
              responsive layouts to emphasize creativity and visual impact.
            </p>
            <div className="mt-6">
              <Link to="/design" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition">
                See More Projects
                <span className="ml-2 text-xl">→</span>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default allProject;
