import React from "react";
import AboutCardSvg from "./svg-components/AboutCardSvg";

function AboutGallery({ experience, images }) {
  return (
    <div className="w-full px-4 lg:w-1/2">
      <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
        <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
          <div className="mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]">
            <img
              src={images[0]}
              alt="about image"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
          <div className="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
            <img
              src={images[1]}
              alt="about image"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="bg-primary relative z-10 mb-4 flex items-center justify-center overflow-hidden px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
            <div>
              <span className="block text-5xl font-extrabold text-white">
                {experience}
              </span>
              <span className="block text-base font-semibold text-white">
                We have
              </span>
              <span className="block text-base font-medium text-white text-opacity-70">
                Years of experience
              </span>
            </div>
            <div>
              <span className="absolute left-0 top-0 -z-10">
                <AboutCardSvg type="1" />
              </span>
              <span className="absolute right-0 top-0 -z-10">
                <AboutCardSvg type="2" />
              </span>
              <span className="absolute bottom-0 right-0 -z-10">
                <AboutCardSvg type="3" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutGallery;
