import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/panel/admin/sidebar.module.css";

const Sidebar = ({ menuOpen, setMenuOpen }) => {
  const [arrowDown1, setArrowDown1] = useState(false);
  const [arrowDown2, setArrowDown2] = useState(false);

  return (
    <div className="d-flex">
      <div
        className={`d-flex pe-2 flex-column justify-content-between align-items-center ${styles.menuWrapper}`}
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ minHeight: `${menuOpen ? "auto" : "100vh"}` }}
      >
        <div className="d-flex flex-column gap-1">
          {!menuOpen && (
            <img
              src="assets/images/shenaakht_logo/logoBottom.png"
              className="m-1 pt-1"
              width="28px"
              alt="logo"
            />
          )}
          <img
            style={{ rotate: `${menuOpen ? "-90deg" : "90deg"}` }}
            className={`cursor-pointer ${menuOpen ? styles.arrowIcon : ""}`}
            src="assets/images/icons/panel/admin/downArrow.svg"
            alt="burger icon"
            width="35px"
          />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center mb-5 gap-4 ps-2">
          <img
            className={menuOpen ? "d-none" : styles.arrowIcon}
            src="assets/images/icons/panel/admin/paperIcon.svg"
            alt="burger icon"
            width="30px"
          />
          <img
            className={menuOpen ? "d-none" : styles.arrowIcon}
            src="assets/images/icons/panel/admin/users.svg"
            alt="burger icon"
            width="30px"
          />
          <img
            className={menuOpen ? "d-none" : styles.arrowIcon}
            src="assets/images/icons/panel/admin/analytics.svg"
            alt="burger icon"
            width="30px"
          />
          <img
            className={menuOpen ? "d-none" : styles.arrowIcon}
            src="assets/images/icons/panel/admin/notificationIcon.svg"
            alt="burger icon"
            width="30px"
          />
          <img
            className={menuOpen ? "d-none" : styles.arrowIcon}
            src="assets/images/icons/panel/admin/setingsIcon.svg"
            alt="burger icon"
            width="30px"
          />
          <img
            className={menuOpen ? "d-none" : styles.arrowIcon}
            src="assets/images/icons/panel/admin/helpIcon.svg"
            alt="burger icon"
            width="30px"
          />
        </div>
      </div>
      {menuOpen && (
        <aside className={styles.sidebarWrapper}>
          <div className="d-flex align-items-center justify-content-center flex-wrap gap-2 pt-4 ms-3">
            <Link to="/">
              <img
                src="assets/images/shenaakht_logo/logoBottom.png"
                className="ms-2 mb-1"
                width="50px"
                alt="logo"
              />
            </Link>
            <h2 className="alert alert-secondary mt-2 p-1 fs-8">
              شناخت‌گردانی
              <span className="me-2 fs-13">(سطح دسترسی: مدیر)</span>
            </h2>
          </div>
          <nav className="pt-5">
            <ul className="list-unstyled">
              <Link to="/auth/admin">
                <li className={`mb-4`}>
                  <div className="d-flex cursor-pointer align-items-center p-1">
                    <img
                      src="assets/images/icons/panel/admin/panelIcon.svg"
                      className="ms-2"
                      alt="news icon"
                      width="25px"
                    />
                    <span className="text-light">میز کار </span>
                  </div>
                </li>
              </Link>
              <li className={`mb-4`}>
                <div
                  className="d-flex cursor-pointer align-items-center p-1 transition-all duration-300"
                  data-bs-toggle="collapse"
                  href="#newsMenu"
                  role="button"
                  aria-expanded="false"
                  aria-controls="newsMenu"
                  onClick={() => setArrowDown1(!arrowDown1)}
                >
                  <img
                    src="assets/images/icons/panel/admin/paperIcon.svg"
                    className="ms-2"
                    alt="news icon"
                    width="25px"
                  />
                  <span>مدیریت محتوا</span>
                  <img
                    src="assets/images/icons/panel/admin/downArrow.svg"
                    className="me-2"
                    alt="down arrow"
                    width="20px"
                    style={{ rotate: `${arrowDown1 ? "" : "90deg"}` }}
                  />
                </div>

                <ul className="list-unstyled collapse me-4" id="newsMenu">
                  <li className="mt-2 p-1 transition-all duration-300">
                    <Link to="content-management/create" className="text-light fs-8 transition-all">
                      ایجاد محتوای جدید
                    </Link>
                  </li>
                  <li className="mt-2 p-1 transition-all duration-300">
                    <Link to="content-management/contents-list" className="text-light fs-8 transition-all">
                      فهرست محتواها
                    </Link>
                  </li>
                  <li className="mt-2 p-1 transition-all duration-300">
                    <Link
                      to="content-management/manage-categories"
                      className="text-light fs-8 transition-all"
                    >
                      مدیریت دسته‌بندی‌ها
                    </Link>
                  </li>
                  <li className="mt-2 p-1 transition-all duration-300">
                    <Link to="content-management/manage-tag" className="text-light fs-8 transition-all">
                      مدیریت برچسب‌ها
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={`mb-4`}>
                <div
                  className="d-flex cursor-pointer align-items-center p-1 transition-all duration-300"
                  data-bs-toggle="collapse"
                  href="#userManagement"
                  role="button"
                  aria-expanded="false"
                  aria-controls="userManagement"
                  onClick={() => setArrowDown2(!arrowDown2)}
                >
                  <img
                    src="assets/images/icons/panel/admin/users.svg"
                    className="ms-2"
                    alt="news icon"
                    width="25px"
                  />
                  <span>مدیریت کاربران</span>
                  <img
                    src="assets/images/icons/panel/admin/downArrow.svg"
                    className="me-2"
                    alt="down arrow"
                    width="20px"
                    style={{ rotate: `${arrowDown2 ? "" : "90deg"}` }}
                  />
                </div>

                <ul className="list-unstyled collapse me-4" id="userManagement">
                  <li className="mt-2 p-1 transition-all duration-300">
                    <Link to="/admin/news-management/create" className="text-light transition-all fs-8">
                      تعیین سطح دسترسی
                    </Link>
                  </li>
                  <li className="mt-2 p-1 transition-all duration-300">
                    <Link to="/admin/news-management/NewsList" className="text-light transition-all fs-8">
                      مدیریت حساب‌ها
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={`mb-4`}>
                <div
                  className="d-flex cursor-pointer align-items-center p-1 transition-all duration-300"
                  data-bs-toggle="collapse"
                  href="#analytics"
                  role="button"
                  aria-expanded="false"
                  aria-controls="analytics"
                >
                  <img
                    src="assets/images/icons/panel/admin/analytics.svg"
                    className="ms-2"
                    alt="news icon"
                    width="25px"
                  />
                  <span>تحلیل تارنما</span>
                </div>
              </li>
              <li className={`mb-4`}>
                <div
                  className="d-flex cursor-pointer align-items-center p-1 transition-all duration-300"
                  data-bs-toggle="collapse"
                  href="#notification"
                  role="button"
                  aria-expanded="false"
                  aria-controls="notification"
                >
                  <img
                    src="assets/images/icons/panel/admin/notificationIcon.svg"
                    className="ms-2"
                    alt="news icon"
                    width="25px"
                  />
                  <span>پیام‌ها</span>
                </div>
              </li>
              <li className={`mb-4`}>
                <div
                  className="d-flex cursor-pointer align-items-center p-1 transition-all duration-300"
                  data-bs-toggle="collapse"
                  href="#setings"
                  role="button"
                  aria-expanded="false"
                  aria-controls="setings"
                >
                  <img
                    src="assets/images/icons/panel/admin/setingsIcon.svg"
                    className="ms-2"
                    alt="news icon"
                    width="25px"
                  />
                  <span>تنظیمات</span>
                </div>
              </li>
              <li className={`mb-4`}>
                <div
                  className="d-flex cursor-pointer align-items-center p-1 transition-all duration-300"
                  data-bs-toggle="collapse"
                  href="#help"
                  role="button"
                  aria-expanded="false"
                  aria-controls="help"
                >
                  <img
                    src="assets/images/icons/panel/admin/helpIcon.svg"
                    className="ms-2"
                    alt="news icon"
                    width="25px"
                  />
                  <span>گزارش مشکل</span>
                </div>
              </li>
            </ul>
          </nav>
        </aside>
      )}
    </div>
  );
};

export default Sidebar;
