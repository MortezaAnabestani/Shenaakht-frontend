import React from "react";
import styles from "../../styles/home/main.module.css";
import FeaturedArticles from "./featuredItems/FeaturedArticles";
import FeaturedDataFiles from "./featuredItems/FeaturedDataFiles";
import FeaturedReports from "./featuredItems/FeaturedReports";
import FeaturedContactUs from "./featuredItems/FeaturedContacUs";
import Hero from "./hero/Hero";
const Main = () => {
  return (
    <div className="container">
      <Hero />
      <FeaturedArticles />
      <FeaturedDataFiles />
      <FeaturedReports />
      <FeaturedContactUs />
    </div>
  );
};

export default Main;
