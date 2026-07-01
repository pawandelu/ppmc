import React from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";
import Icons from "./Icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="pt-12 sm:pt-17.5 pb-7 sm:pb-[30.34px] bg-dark-brown flex flex-col justify-center">
      <div className="max-w-360 w-full mx-auto flex flex-col items-center justify-center">
        <img
          src="/assets/image/logo.webp"
          className="w-[197.66px] h-[77.66px] mb-5 sm:mb-8 md:mb-10"
          alt="pepe-logo"
        />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mb-8 sm:mb-10">
          <div>
            <Link to="/">
              <Heading heading={"Contact Us"} vari="sec" />
            </Link>
          </div>
          <div className="hidden sm:block">
            <Icons icon={"line"} />
          </div>
          <div>
            <Link to="/">
              <Heading heading={"Privacy Policy"} vari="sec" />
            </Link>
          </div>
          <div className="hidden sm:block">
            <Icons icon={"line"} />
          </div>
          <div>
            <Link to="/">
              <Heading heading={"Term and Conditions"} vari="sec" />
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-10 sm:mb-12.5">
          <div className="w-10 h-10 border rounded-md border-white flex items-center justify-center">
            <Icons icon={"twitter"} />
          </div>
          <div className="w-10 h-10 border rounded-md border-white flex items-center justify-center">
            <Icons icon={"telegram"} />
          </div>
          <div className="w-10 h-10 border rounded-md border-white flex items-center justify-center">
            <Icons icon={"descord"} />
          </div>
        </div>
      </div>

      <div className="border border-taupe-gray mb-5 sm:mb-7.5"></div>

      <span className="sans font-semibold text-sm sm:text-base leading-[140%] text-warm-gray text-center">
        Copyright©{currentYear}PEPE Mining Company@.com. All rights reserved
      </span>
    </section>
  );
};

export default Footer;
