import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import image1 from "../../assets/web/image1.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import ProjectMenu from "../../components/ProjectMenu";

function WebProject() {
  return (
    <div className="w-full max-w-5xl p-6 bg-white rounded-2xl shadow-xl">
      <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">🚀 E-Commerce Platform</h3>

      {/* Swiper Carousel */}
      <Swiper modules={[Navigation, Pagination]} spaceBetween={30} slidesPerView={1} navigation pagination={{ clickable: true }} className="rounded-xl overflow-hidden shadow-md">
        <SwiperSlide>
          <img src={image1} alt="Project Screenshot 1" className="w-full h-80 object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image2.png" alt="Project Screenshot 2" className="w-full h-80 object-cover" />
        </SwiperSlide>
      </Swiper>

      {/* Project Description */}
      <div className="mt-8 text-center">
        <p className="text-lg text-gray-600">A sleek, responsive e-commerce website built with React, featuring product catalogs, shopping carts, and secure checkout processes, integrated with TailwindCSS for a modern UI.</p>
        <div className="mt-6">
          <a href="#" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition">
            See More Projects
            <span className="ml-2 text-xl">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default WebProject;
