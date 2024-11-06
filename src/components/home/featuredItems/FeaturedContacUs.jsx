import React from "react";
import styles from "../../../styles/us/featuredContactUs.module.css";
import fontSizes from "../../../styles/fontSizes/fontSizes.module.css";
import { Link, NavLink } from "react-router-dom";

const FeaturedContacUs = () => {
  return (
    <div className={`${styles.aboutUs} container`}>
      <div className={styles.aboutUs_right}>
        <p className="mb-5 d-none d-md-block d-flex align-self-center">
          <span className="fw-bolder">مرکز تحقیقات اجتماعی و داده‌کاوی شناخت</span>، سازمانی خصوصی است که به
          ارزیابی و تحلیل مهم‌ترین آمارها و روندهای موجود در ایران و جهان می‌پردازد. ما در شناخت تلاش داریم
          تصویری دقیق و صادقانه از واقعیت‌های جاری زندگی در ایران ارائه دهیم، تصویری که با رفع خلاهای موجود،
          بتواند چشم‌انداز تحلیلی قابل اتکایی را برای سیاست‌گذاران، فعالان اقتصادی، متولیان رسانه و فعالان
          فرهنگی اجتماعی فراهم آورد.
        </p>
        <div className="d-flex align-items-center justify-content-center gap-5">
          <div className="text-center">
            <h6>می‌توان شناخت</h6>
            <p className="text-center">سوالات خود را از کارشناسان ما در شناخت بپرسید</p>
            <div className={`${styles.aboutUs_right_button} mt-2`}>
              <NavLink to={"/contactUs"} className={styles.firstLink}>
                ثبت مشاوره
              </NavLink>
            </div>
          </div>
          <div className="text-center">
            <h6>شناخت‌بازار</h6>
            <p className="text-center">نخستین دیوار نیازمندی‌ها و ارائۀ خدمات پژوهشی اجتماعی</p>
            <div className={`${styles.aboutUs_right_button} mt-2`}>
              <NavLink to={"/market"} className={styles.firstLink} style={{ backgroundColor: "#54ABC3" }}>
                ثبت سفارش
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutUs_left}>
        <img src="./assets/images/photo/aboutUsHome.png" alt="about us" />
      </div>
    </div>
  );
};

export default FeaturedContacUs;
