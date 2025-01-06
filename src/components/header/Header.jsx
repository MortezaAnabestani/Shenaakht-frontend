import React, { useState } from "react";
import styles from "../../styles/header/header.module.css";
import fontSizes from "../../styles/fontSizes/fontSizes.module.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import moment from "moment-jalaali";
import AdvForHeader from "../advertisement/AdvForHeader";
import { useSelector } from "react-redux";

const Header = () => {
  //Converting the Gregorian date to Jalali
  moment.loadPersian({ usePersianDigits: true, dialect: "persian-modern" });
  const initialTime = new Date();
  const persianTime = moment(initialTime).format("jD jMMMM jYYYY");

  //states
  const [search, setSearch] = useState("");
  const data = useSelector((state) => state.login);

  const searchHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.headerWrapper}>
      <AdvForHeader />
      <div className="container">
        <div className={styles.topHeader}>
          <div className={styles.logo}>
            <Link to="/">
              <img
                className={styles.logoImage}
                src="/assets/images/shenaakht_logo/logoSide.png"
                alt="logo_shenaakht"
              ></img>
            </Link>
          </div>
          <div className={styles.date}>
            <p>تاریخ امروز</p>
            <p>{persianTime}</p>
          </div>
          <form className={styles.searchBox} onSubmit={searchHandler}>
            <input
              type="text"
              placeholder="از این‌جا بیابید..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">
              <i>
                <img src="/assets/images/icons/searchIcon_white.svg" alt="search icon" width={"25px"} />
              </i>
            </button>
          </form>
          <div className={styles.login}>
            <i>
              <img src="/assets/images/icons/profileIcon_white.svg" alt="search icon" width={"25px"} />
            </i>
            <Link to="auth/login" className={fontSizes.px13}>
              ورود<span className="text-info">/</span>ثبت‌نام
            </Link>
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
