import React from "react";
import styles from "../../styles/home/main.module.css";
import FeaturedContactUs from "./featuredItems/FeaturedContacUs";
import Hero from "./hero/Hero";
import FeaturedMain from "./featuredItems/FeaturedMain";

const Home = () => {
  return (
    <div className="container">
      <Hero />
      <FeaturedMain />
      <FeaturedContactUs />
    </div>
  );
};

export default Home;
