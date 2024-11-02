import React from "react";
import styles from "../../styles/home/root.module.css";
import Header from "../../components/header/Header";
import { Outlet } from "react-router";
import Footer from "../../components/footer/Footer";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
