import React from "react";
import styles from "../../styles/footer/footer.module.css";
import { Link } from "react-router-dom";
import MediaIconPart from "../other/MediaIconPart";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.footerTop}>
          <img src="/assets/images/shenaakht_logo/logoBottom.png" alt="shenaakht_logo" />
          <img className="d-none" src="/assets/images/shenaakht_logo/logoSide.png" alt="shenaakht_logo" />
          <p>
            <b className="fw-900">ما شناختیم...</b>
            <br />
            جهان اطراف ما شبکۀ پیچیده‌ای از ساختارها، روابط و تعاملاتی است که به زندگی ما شکل داده‌اند،
            فرصت‌های مختلفی پیش روی ما قرار می‌دهند، گاه ما را محدود و گاه مجهز می‌کنند، و بسیاری اوقات مسائل
            مختلفی را پیش روی ما قرار می‌دهند.
            <span>
              <Link to="/aboutUs"> مشاهده بیش‌تر...</Link>
            </span>
          </p>
        </div>
        <div className={`${styles.footerLineHidden} d-none`}>
          <img src="/assets/images/lines/barline.svg" alt="line" />
          <p>ارتباط با ما</p>
          <img src="/assets/images/lines/barline.svg" alt="line" />
        </div>
        <div className={styles.footerLine}>
          <p>ارتباط با ما</p>
          <img src="/assets/images/lines/barline.svg" alt="line" />
          <p>نمادهای الکترونیک</p>
          <img src="/assets/images/lines/barline.svg" alt="line" />
          <p>پیوست‌ها</p>
        </div>
        <div className={styles.footerMiddle}>
          <div className={styles.footerMiddle_right}>
            <div className={`${styles.footerMiddle_right_item} col-6 p-0`}>
              <i>
                <img src="/assets/images/icons/mail/envelopeIcon.svg" alt="envelope icon" width={"17px"} />
              </i>
              <p>
                <span className={styles.footerMiddle_right_item_text}>آدرس ایمیل:</span>
                <br />
                <span className={styles.footerMiddle_right_item_address}>shenaakht@gmail.com</span>
              </p>
            </div>
            <div className={`${styles.footerMiddle_right_item} col-5`}>
              <i>
                <img src="/assets/images/icons/phoneIcon.svg" alt="phone icon" width={"15px"} />
              </i>
              <p>
                <span className={styles.footerMiddle_right_item_text}>شماره تماس:</span>
                <br />
                <span className={styles.footerMiddle_right_item_address}>09012511191</span>
              </p>
            </div>
            <div className={`${styles.footerMiddle_right_item} col-12 col-lg-11`}>
              <i>
                <img src="/assets/images/icons/homeIcon.svg" alt="home address icon" width={"17px"} />
              </i>
              <p>
                <span className={styles.footerMiddle_right_item_text}>آدرس دفتر:</span>
                <br />
                <span className={styles.footerMiddle_right_item_address}>
                  مشهد، دانشگاه فردوسی، بلوار دانش، ساختمان مقصودلو (پارک علم و فناوری)، اتاق ۳۰۹
                </span>
              </p>
            </div>
          </div>
          <div className={styles.footerMiddle_middle}>
            <img src="/assets/images/icons/etemad_e_electronic.svg" alt="etemad_e_electronic" />
            <img
              referrerPolicy="origin"
              id="rgvjfukzoeukjxlzfukzrgvj"
              onClick={() =>
                'window.open("https://logo.samandehi.ir/Verify.aspx?id=368163&p=xlaogvkamcsirfthgvkaxlao", "Popup","toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")'
              }
              alt="logo-samandehi"
              src="https://logo.samandehi.ir/logo.aspx?id=368163&p=qftiwlbqaqgwnbpdwlbqqfti"
            />
          </div>
          <div className={`${styles.footerLineHidden} d-none`}>
            <img src="/assets/images/lines/barline.svg" alt="line" />
            <p>پیوست‌ها</p>
            <img src="/assets/images/lines/barline.svg" alt="line" />
          </div>
          <div className={styles.footerMiddle_left}>
            <div className={styles.footerMiddle_left_item_left}>
              <div className={styles.footerMiddle_left_item}>
                <i>
                  <img
                    src="/assets/images/lines/left-arrow_yellow.svg"
                    alt="left arrow icon"
                    width={"15px"}
                  />
                </i>
                <Link to="/contactUs"> گزارش خرابی سایت </Link>
              </div>
              <div className={styles.footerMiddle_left_item}>
                <i>
                  <img
                    src="/assets/images/lines/left-arrow_yellow.svg"
                    alt="left arrow icon"
                    width={"15px"}
                  />
                </i>{" "}
                <Link to="/polls"> نظرسنجی‌ها</Link>
              </div>
              <div className={styles.footerMiddle_left_item}>
                <i>
                  <img
                    src="/assets/images/lines/left-arrow_yellow.svg"
                    alt="left arrow icon"
                    width={"15px"}
                  />
                </i>{" "}
                <Link to="/articles"> مقالات</Link>
              </div>
            </div>
            <div className={styles.footerMiddle_left_item_right}>
              <div className={styles.footerMiddle_left_item}>
                <i>
                  <img
                    src="/assets/images/lines/left-arrow_yellow.svg"
                    alt="left arrow icon"
                    width={"15px"}
                  />
                </i>{" "}
                <Link to="/aboutUs"> سوالات متدوال</Link>
              </div>
              <div className={styles.footerMiddle_left_item}>
                <i>
                  <img
                    src="/assets/images/lines/left-arrow_yellow.svg"
                    alt="left arrow icon"
                    width={"15px"}
                  />
                </i>{" "}
                <Link to="/aboutUs"> دربارۀ ما</Link>
              </div>
              <div className={styles.footerMiddle_left_item}>
                <i>
                  <img
                    src="/assets/images/lines/left-arrow_yellow.svg"
                    alt="left arrow icon"
                    width={"15px"}
                  />
                </i>{" "}
                <Link to="/contactUs"> تماس با ما</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>
              تمامی حقوق این وبسایت برای <span style={{ color: "#ffffff" }}>تیم شناخت</span> محفوظ است.
            </p>
          </div>
          <div className={styles.mediaIcons}>
            <MediaIconPart />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
