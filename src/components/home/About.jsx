import React from "react";
import Navbar from "../common/Navbar";

const About = () => {
  return (
    <section className="px-3 md:min-h-336.75 sm:min-h-300 min-h-280 bg-[url('/assets/image/about-bg.webp')] bg-center bg-no-repeat bg-cover relative">
      <div className="max-w-360 w-full mx-auto flex flex-col items-center justify-center">
        <div className="max-w-205.25 flex flex-col items-center justify-center mt-[100.89px]">
          <h1 className="titan font-normal xl:text-7xl lg:text-6xl sm:text-5xl text-4xl leading-[120%] tracking-[5%] bg-[radial-gradient(121.7%_121.7%_at_45.28%_10.98%,#008505_0%,rgba(0,58,2,0)_100%)] bg-clip-text text-transparent [-webkit-text-stroke:6px_#E2B016] ">
            About
          </h1>
          <p className="sans w-full font-semibold text-base sm:text-[18px] md:text-2xl leading-[145%] text-white mt-8 text-center">
            Imagine PPMC as the wacky PEPE Mining Company, where instead of
            digging for gold, they're on a quest for the rarest of treasures:
            internet memes! They've turned staking into a virtual game of "hot
            potato." Stake your claim, and if you're quick enough, you'll dodge
            the meme explosion and earn yourself a reward i the form of a
            dancing frog GIF. It's like playing musical chairs but with crypto
            and Pepe memes!
          </p>
        </div>
        <div className="lg:mt-[118.01px] md:mt-16 sm:mt-9 mt-5">
          <img
            src="/assets/image/swiming.webp"
            className="w-[1343.05px] h-[478.75px] max-lg:hidden object-contain"
            alt="about-img"
          />
          <img
            className="w-full h-100 lg:hidden max-sm:hidden object-contain"
            src="/assets/image/about-bg2.webp"
            alt=""
          />
          <img
            className="w-full min-[400px]:h-125 min-[300px]:h-68.75 object-contain sm:hidden"
            src="/assets/image/about-bg3.webp"
            alt=""
          />
        </div>

        <p className="max-w-283.75 sans font-semibold text-base sm:text-[18px] md:text-2xl leading-[145%] text-white text-center lg:mt-[96.35px] md:mt-16 sm:mt-10 mt-5">
          Or you can think of it as the magical pizza delivery token, except
          instead of pizzas, it delivers money to your wallet while you
          binge-watch your favorite shows. It's like having a mini ATM that
          occasionally pops up and says, "Surprise! Here's some cash for your
          excellent lounging skills!
        </p>

        <img
          src="/assets/image/about-bottom.webp"
          className="w-full h-57.5 absolute -bottom-17.5 right-0 "
          alt="about-bottom"
        />
      </div>
    </section>
  );
};

export default About;
