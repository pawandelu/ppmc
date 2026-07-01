import React from "react";

const Heading = ({ heading, vari }) => {
  const variants = {
    pri:"text-white hover:text-light-green duration-300 transition-all cursor-pointer",
    sec: "text-warm-gray",
  };
  return (
    <h2
      className={`sans font-semibold text-[20px] leading-[140%] tracking-[10%] ${variants[vari]}`}
    >
      {heading}
    </h2>
  );
};

export default Heading;
