import React from "react";

const Hero = () => {
  return (
    <section className="min-h-202.5 bg-[url('/assets/image/webp/hero-bg.webp')] bg-center bg-no-repeat bg-cover relative">
      <img
        src="/assets/image/webp/frog.webp"
        className=" absolute w-[154.12px] h-[154.81px] top-34 left-0 max-lg:hidden "
        alt="hero-left"
      />
      <div className="max-w-360 w-full mx-auto flex items-center xl:flex-row max-xl:text-center  flex-col justify-between xl:pl-50 max-xl:pt-10 xl:pr-10.75 pr-5">
        <div className="lg:w-141 md:w-100 w-80  max-xl:justify-center max-xl:items-center  flex flex-col xl:-mr-19 z-20 lg:mb-18 mb-10">
          <h1 className="one font-normal  xl:text-7xl lg:text-6xl md:text-5xl text-4xl  leading-[120%] tracking-[5%] bg-[radial-gradient(121.7%_121.7%_at_45.28%_10.98%,#008505_0%,rgba(0,58,2,0)_100%)] bg-clip-text text-transparent [-webkit-text-stroke:6px_#E2B016]">
            PEPE Mining Company
          </h1>
          <p className="lg:max-w-[396.94px] md:w-90 sm:w-60 w-50 font-semibold xl:text-2xl lg:text-[22px] md:text-[20px] sm:text-[16px] text-[14px] leading-[145%] text-white mt-8 mb-8">
            A BRC20 token that lets you have passive income
          </p>
          <button>
            <img
              src="/assets/image/webp/button.webp"
              className="lg:w-[170.81px] md:w-30 w-25 lg:h-[76.29px] md:h-14 h-11 bg-dark-brown rounded-2xl transition-all duration-300 hover:shadow-[0_0_20px_6px_rgba(250,204,21,0.6)] cursor-pointer"
              alt="hero-btn"
            />
          </button>
        </div>

        <div>
          <img
            src="/assets/image/webp/hero.webp"
            className="min:[1400px]:w-177 xl:w-170 2xl:h-180 xl:h-170 object-center object-contain "
            alt="hero-miner"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
