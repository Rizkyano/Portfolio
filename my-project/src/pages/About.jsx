import React from "react";
import Education from "../components/Education";

const About = () => {
  return (
    <div className="bg-white ">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Menambahkan gambar di samping teks */}
            <img src="/image.png" alt="Profile" className="w-48 h-48 object-cover shadow-lg border border-gray-300" />

            {/* Bagian teks */}
            <div className="text-left">
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">Hi! I'm Rizkyano</h1>
              <p className="mt-6 text-lg font-medium text-gray-500 sm:text-xl">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.</p>
              <div className="mt-8">
                <a href="#" className="text-sm font-semibold text-gray-900">
                  Download CV <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-7xl py-10">Education</h1>
              <div>
                <Education />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
