import React from "react";
import HeroSlider from "./HeroSlider";
import HeroColumn from "./HeroColumn";
import styles from "../../../styles/home/hero.module.css";

const Hero = () => {
  return (
    <div className={`${styles.heroWrapper} row`}>
      <HeroSlider />
      <HeroColumn />
    </div>
  );
};

export default Hero;
