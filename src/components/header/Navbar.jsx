import React from "react";
import styles from "../../styles/header/navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-md navbar-light ${styles.navbar}`}>
      <div className="container-fluid p-0">
        <button
          className={`navbar-toggler ${styles.navbarToggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ outline: "none", border: "none" }}
        >
          <span className={`navbar-toggler-icon ${styles.navbarTogglerIcon}`}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className={`navbar-nav ${styles.navbarNav}`}>
            <li className={`nav-item ${styles.navItem} active`}>
              <NavLink className="nav-link" aria-current="page" to="/">
                صفحۀ اصلی
              </NavLink>
            </li>
            <li className={`nav-item ${styles.navItem} active`}>
              <NavLink className="nav-link rounded-2" aria-current="page" to="/market">
                <span className="ps-1">
                  <img src="/assets/images/heroSliders/blueDot/blueDot1.gif" alt="blue dot" width={"12px"} />
                </span>
                شناخت‌بازار
              </NavLink>
            </li>
            <li className={`nav-item ${styles.navItem} active`}>
              <NavLink className="nav-link" aria-current="page" to="/polls">
                نظرسنجی‌ها
              </NavLink>
            </li>
            <li className={`nav-item ${styles.navItem} active`}>
              <NavLink className="nav-link" aria-current="page" to="/articles">
                مقالات
              </NavLink>
            </li>
            <li className={`nav-item ${styles.navItem} active`}>
              <NavLink className="nav-link" aria-current="page" to="/datafiles">
                پرونده‌های آماری
              </NavLink>
            </li>
            <li className={`nav-item ${styles.navItem} active`}>
              <NavLink className="nav-link" aria-current="page" to="/reports">
                پیشخوان اخبار
              </NavLink>
            </li>
            <li className={`nav-item ${styles.navItem} active`}>
              <NavLink className="nav-link" aria-current="page" to="/advancedSearch">
                جستجوی پیشرفته
              </NavLink>
            </li>
            <li className={`nav-item ${styles.navItem} active`}>
              <NavLink className="nav-link" aria-current="page" to="/aboutUs">
                دربارۀ ما
              </NavLink>
            </li>
            <li className={`nav-item ${styles.navItem} active`}>
              <NavLink className="nav-link" aria-current="page" to="/contactUs">
                ارتباط با ما
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
