import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Aniv1 from "../../assets/Design/MD/Aniv1.png";
import Aniv2 from "../../assets/Design/MD/Aniv2.png";
import Aniv3 from "../../assets/Design/MD/Aniv3.png";
import MegaSale1 from "../../assets/Design/MD/MegaSale1.png";
import MegaSale2 from "../../assets/Design/MD/MegaSale2.png";
import MegaSale3 from "../../assets/Design/MD/MegaSale3.png";
import PriceTag from "../../assets/Design/MD/PriceTag.png";
import SCM from "../../assets/Design/MD/SCM.png";
import SCM1 from "../../assets/Design/MD/SCM1.png";
import Standee1 from "../../assets/Design/MD/Standee1.png";
import Standee3 from "../../assets/Design/MD/Standee3.png";
import Intonate from "../../assets/Design/Intonate/Intonate.png";
import Mascot from "../../assets/Design/TIK Games/Mascot.png";
import MazeOut from "../../assets/game/MazeOut.png";
import Flea from "../../assets/game/Flea.png";
import JalanJalan from "../../assets/game/Jalan-Jalan.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import ProjectMenu from "../../components/ProjectMenu";

function desginProject() {
  const imageList = [
    { src: Aniv1, alt: "1st Anniversary", col: 2, row: 2 },
    { src: Aniv2, alt: "Birthday Sale", col: 2, row: 2 },
    { src: Aniv3, alt: "Anniversary Sale", col: 2, row: 1 },
    { src: MegaSale1, alt: "Mega Sale Banner", col: 2, row: 2 },
    { src: PriceTag, alt: "Price Tag", col: 2, row: 2 },
    { src: MegaSale2, alt: "Sale Small Green", col: 1, row: 1 },
    { src: MegaSale3, alt: "Sale Blue", col: 1, row: 1 },
    { src: Standee3, alt: "Standee 1", col: 1, row: 2 },
    { src: SCM, alt: "SCM Flagship", col: 2, row: 2 },
    { src: Standee1, alt: "Standee 1", col: 1, row: 2 },
    { src: SCM1, alt: "Standee 1", col: 2, row: 1 },
  ];
  return (
    // <div className="w-full max-w-5xl p-6 h-full bg-white rounded-2xl shadow-xl">
    <div className="w-full max-w-5xl p-6 bg-white rounded-2xl shadow-xl">
      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        autoHeight={true} // ✅ Ini kunci utama
      >
        <SwiperSlide>
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">🚀 More Design</h3>
          <div className="mt-8 mx-5 text-center overflow-hidden ">
            <div className="mt-8 mx-auto px-4 text-center overflow-hidden max-w-3xl ">
              <div className="grid grid-cols-6 auto-rows-[180px] gap-4 max-w-6xl mx-auto">
                {imageList.map((img, index) => (
                  <div key={index} className={`relative overflow-hidden rounded-xl shadow-md col-span-${img.col} row-span-${img.row}`}>
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                ))}
              </div>
            </div>
            <p className="text-lg mt-8 mx-20 text-gray-600">
              Here I help the digital marketing team in creating designs such as posters, price tags, standees etc. The design that will be made will be discussed with the team regarding the content of the design. Late designs will be
              discussed again before publishing.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">🚀 Intonate.pro</h3>
          <div className="mt-8 mx-5 text-center overflow-hidden">
            <img src={Intonate} alt="Project Screenshot 1" className="w-full max-w-3xl h-80 object-cover rounded-xl  mx-auto" />
            <p className="text-lg mt-8 mx-20 text-gray-600">A sleek, responsive e-commerce website built with React, featuring product catalogs, shopping carts, and secure checkout processes, integrated with TailwindCSS for a modern UI.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">🚀 Flea</h3>
          <div className="mt-8 mx-5 text-center overflow-hidden">
            <img src={Mascot} alt="Project Screenshot 1" className="w-full max-w-3xl h-80 object-cover rounded-xl mx-auto" />
            <p className="text-lg mt-8 mx-20 text-gray-600">A sleek, responsive e-commerce website built with React, featuring product catalogs, shopping carts, and secure checkout processes, integrated with TailwindCSS for a modern UI.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default desginProject;
