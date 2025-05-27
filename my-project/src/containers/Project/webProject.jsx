import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import image1 from "../../assets/web/image1.png";
import Moodeek from "../../assets/web/Moodeek.png";
import FoodPOS from "../../assets/web/FoodPOS.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import ProjectMenu from "../../components/ProjectMenu";

function WebProject() {
  return (
    <div className="w-full max-w-5xl p-6 bg-white rounded-2xl shadow-xl">
      {/* Swiper Carousel */}
      <Swiper modules={[Navigation]} spaceBetween={30} slidesPerView={1} navigation autoHeight={true}>
        <SwiperSlide>
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">🚀 E-Commerce Platform</h3>
          <div className="mt-8 mx-5 text-center overflow-hidden">
            <img src={image1} alt="Project Screenshot 1" className="w-full max-w-3xl h-80 object-cover rounded-xl shadow-md mx-auto" />
            <p className="text-lg mt-8 mx-20 text-gray-600">A sleek, responsive e-commerce website built with React, featuring product catalogs, shopping carts, and secure checkout processes, integrated with TailwindCSS for a modern UI.</p>
            <div className="mt-6">
              <a href="https://milestone-2-rizkyano.vercel.app/product" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition">
                Go to the webseite
                <span className="ml-2 text-xl">→</span>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">🚀 Moodeek</h3>
          <div className="mt-8 mx-5 text-center overflow-hidden">
            <img src={Moodeek} alt="Project Screenshot 1" className="w-full max-w-3xl h-80 object-cover rounded-xl shadow-md mx-auto" />
            <p className="text-lg mt-8 mx-20 text-gray-600">
              Web project developed a budget-friendly travel platform for both local and international destinations. Created a responsive user interface, selected cohesive color palettes and ensured accessibility across devices and deployed
              by Netlify using HTML, CSS, and JavaScript.
            </p>
            <div className="mt-6">
              <a href="http://ngopilah.my.id/" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition">
                Go to the webseite
                <span className="ml-2 text-xl">→</span>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">🚀 Food POS</h3>
          <div className="mt-8 mx-5 text-center overflow-hidden">
            <img src={FoodPOS} alt="Project Screenshot 1" className="w-full max-w-3xl h-80 object-cover rounded-xl shadow-md mx-auto" />
            <p className="text-lg mt-8 mx-20 text-gray-600">
              The POS application combines a modern tech stack—Next.js, React with TypeScript on the frontend, and Python with FastAPI on the backend—using MySQL for reliable data management. It offers key features for small food
              businesses, including sales, inventory, reporting, recipes, RBAC, and secure token-based authentication. Username: Mamad Password: ThisiPassowrd
            </p>
            <div className="mt-6">
              <a href="https://pos-project-revou.vercel.app/dashboard" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition">
                Go to the webseite
                <span className="ml-2 text-xl">→</span>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default WebProject;
