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
import Design from "../../assets/Design/Design.png";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import ProjectMenu from "../../components/ProjectMenu";

function desginProject() {
  const imageList = [
    { src: Aniv1, alt: "1st Anniversary", span: "col-span-2 row-span-2" },
    { src: Aniv2, alt: "Birthday", span: "col-span-2 row-span-2" },
    { src: Aniv3, alt: "Anniversary Sale", span: "col-span-2 row-span-1" },
    { src: MegaSale1, alt: "Mega Sale", span: "col-span-2 row-span-2" },
    { src: PriceTag, alt: "Price Tag", span: "col-span-2 row-span-2" },
    { src: MegaSale2, alt: "Sale Green", span: "col-span-1 row-span-1" },
    { src: MegaSale3, alt: "Sale Blue", span: "col-span-1 row-span-1" },
    { src: Standee3, alt: "Standee 3", span: "col-span-1 row-span-2" },
    { src: SCM, alt: "SCM", span: "col-span-2 row-span-2" },
    { src: Standee1, alt: "Standee 1", span: "col-span-1 row-span-2" },
    { src: SCM1, alt: "SCM", span: "col-span-2 row-span-1" },
  ];
  return (
    <div className="w-full max-w-5xl p-6 bg-white rounded-2xl shadow-xl">
      {/* Swiper Carousel */}
      <Swiper modules={[Navigation]} spaceBetween={30} slidesPerView={1} navigation autoHeight={true}>
        <SwiperSlide>
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">🚀 More Design</h3>
          <div className="mt-8 mx-5 text-center overflow-hidden ">
            <div className="mt-8 mx-20 px-4 text-center overflow-hidden">
              <div className="grid grid-cols-6 auto-rows-[180px] gap-4 max-w-6xl mx-auto">
                {imageList.map((img, index) => (
                  <div key={index} className={`relative overflow-hidden rounded-xl shadow-md flex items-center justify-center ${img.span}`}>
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
            <p className="text-lg mt-8 mx-20 text-gray-600">
              Intonate is a casual karaoke event held on December 26, 2022, at Mr.Bitsy Munchies Bar. As a freelance graphic designer, I created the logo, visual assets, and social media content from scratch, ensuring clear and engaging
              designs using Adobe Illustrator and Photoshop.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">🚀 TIK Games Event Mascot</h3>
          <div className="mt-8 mx-5 text-center overflow-hidden">
            <img src={Mascot} alt="Project Screenshot 1" className="w-full max-w-3xl h-80 object-cover rounded-xl mx-auto" />
            <p className="text-lg mt-8 mx-20 text-gray-600">
              In this event, I had the opportunity to contribute by designing a mascot that not only represents the identity of the event but also reflects the spirit of innovation and technology. I started from an initial sketch and
              developed it into a full-color digital illustration
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">🚀 Design Portfolio</h3>
          <div className="mt-8 mx-5 text-center overflow-hidden">
            <img src={Design} alt="Project Screenshot 1" className="w-full max-w-3xl h-80 object-cover rounded-xl mx-auto" />
            <p className="text-lg mt-8 mx-20 text-gray-600">Showcases a diverse range of multimedia design works, reflecting expertise in graphic design, logo creation, visual merchandising, and proficiency with Adobe Illustrator.</p>
            <div className="mt-6">
              <Link to="https://www.behance.net/gallery/192731231/Rizkyano-Portfolio" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition">
                Go to Design Portfolio
                <span className="ml-2 text-xl">→</span>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default desginProject;
