import React from "react";
import moment from "moment-jalaali";
import styles from "../../styles/panel/admin/admin.module.css";

const Header = () => {
  //Converting the Gregorian date to Jalali
  moment.loadPersian({ usePersianDigits: true, dialect: "persian-modern" });
  const initialTime = new Date();
  const persianTime = moment(initialTime).format("jD jMMMM jYYYY");

  return (
    <div className={styles.headerWrapper}>
      <div className="d-flex flex-column-reverse flex-md-row p-2 w-100 bg-light align-items-center justify-content-between">
        <div className={`${styles.searchWrapper} text-center mt-3 mt-md-0`}>
          <input
            type="text"
            className="ms-2 rounded-2 border-1 border-light fs-8 p-1 w-80"
            placeholder="جستجو در سایت"
          />
          <img
            className="cursor-pointer"
            src="/assets/images/icons/searchIcon.svg"
            alt="search icon"
            width={"25px"}
          />
        </div>
        <div className={`${styles.notificationWrapper} d-flex justify-content-between align-items-center`}>
          <img
            src="/assets/images/icons/panel/admin/notificationIcon_black.svg"
            alt="notification icon"
            width={"25px"}
            className="cursor-pointer"
          />
          <img
            src="/assets/images/icons/panel/admin/messagesIcon.svg"
            alt="notification icon"
            width={"25px"}
            className="cursor-pointer"
          />
          <span>{persianTime}</span>
          <img
            src="/assets/images/icons/profileIcon.svg"
            alt="notification icon"
            width={"25px"}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
