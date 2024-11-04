import React from "react";
import HeroSlider from "./HeroSlider";
import HeroColumn from "./HeroColumn";

const Hero = () => {
  return (
    <div className="mt-3 mb-2 row d-flex align-items-stretch justify-content-between">
      <HeroSlider />
      <HeroColumn />
    </div>
  );
};

export default Hero;
