import React from "react";
import styles from "../../styles/us/contactUs.module.css";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  return (
    <div className="container">
      <div className={styles.baner}>
        <img src="assets/images/photo/contactUs_Hero.png" alt="contact us" />
        <div className={styles.banerTitle}>
          <h6>تماس با ما</h6>
          <p>سوالات خود را از کارشناسان ما بپرسید</p>
        </div>
      </div>
      <div className="mt-4">
        <div className={styles.main_contact}>
          <div className={`${styles.main_contact_call}`}>
            <img src="assets/images/icons/phoneIcon_green.svg" alt="call" />
            <div>
              <h6>شماره تماس:</h6>
              <p>02128423014</p>
            </div>
          </div>
          <img
            className="d-none d-lg-block"
            src="assets/images/icons/bar_icon.svg"
            alt="bar icon"
            style={{ width: "1px", height: "auto" }}
          />
          <div className={styles.main_contact_address}>
            <img src="assets/images/icons/location_icon.svg" className="p-2" alt="location icon" />
            <div className={styles.main_contact_address_text}>
              <h6>آدرس:</h6>
              <p>مشهد، دانشگاه فردوسی، بلوار دانش، ساختمان مقصودلو (پارک علم و فناوری)، اتاق ۳۰۹</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.main_contant_map}>
        <img src="assets/images/photo/googleMap.jpg" alt="google map location" />
      </div>
      <ContactUsForm />
    </div>
  );
};

export default ContactUs;
