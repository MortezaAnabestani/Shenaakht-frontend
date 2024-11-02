import React from "react";
import styles from "../../../styles/home/HeroColumn.module.css";
import fontSizes from "../../../styles/fontSizes/fontSizes.module.css";
import NewsTicker from "react-advanced-news-ticker";
import { Link } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";

const HeroColumn = () => {
  const ticker = [
    "از آنجا که لورم ایپسوم، شباهت زیادی به متن های واقعی دارد، طراحان معمولا از لورم ایپسوم استفاده میکنند تا فقط به مشتری یا کار فرما نشان دهند که قالب طراحی شده بعد از اینکه متن در آن قرار میگرد چگونه خواهد بود و فونت ها و اندازه ها چگونه در نظر گرفته شده است.",
    "اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود. طراحان وب و گرافیک از این متن برای پرکردن صفحه و ارائه شکل کلی طرح استفاده می‌کنند.",
    "نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت و گرافیست کاران بعد از آنکه قالب و محتوای مورد نظرشون را ایجاد کردند از یاد می‌برند که متن لورم را از قسمتهای مختلف سایت حذف کنند و یا با متن دیگری جایگزین کنند. به همین دلیل اغلب اوقات ما با وبسایتهایی مواجه می‌شویم که در گوشه و کنار صفحات آنها متن لورم ایپسوم هنوز وجود دارد و حذف نشده است که این نشان دهنده بی توجهی طراحان است.",
  ];

  return (
    <div className="col-12 col-md-5">
      <Link to={"/market"}>
        <h1 className={`fw-bold ${fontSizes.px18} text-center p-1 ${styles.heroColumeTitle}`}>شناخت‌بازار</h1>
      </Link>
      <p className={`${fontSizes.px12} fw-bold text-center mt-3`}>
        <span className="ps-1">
          <img src="./assets/images/heroSliders/blueDot/blueDot1.gif" alt="blue dot" width={"15px"} />
        </span>
        نخستین دیوار تخصصی نیازمندی‌ها و ارائۀ خدمات پژوهشی اجتماعی
      </p>
      <div className={`${styles.heroColumnSet}`}>
        <div>
          <NewsTicker
            rowHeight={65}
            maxRows={4}
            speed={250}
            duration={4000}
            autoStart={true}
            pauseOnHover={true}
            id="myId"
            className={styles.tickerWrapper}
          >
            {ticker.map((item, index) => (
              <Link to={`/merket/${index}`}>
                <div
                  className={`${fontSizes.px10} ${styles.tickerItem} d-flex align-items-center mb-3 mt-1 `}
                  key={index}
                >
                  <span className={`me-1`}>
                    <img src="./assets/images/icons/profile.png" width={"35px"} alt="profile" />
                  </span>
                  <LinesEllipsis text={item} maxLine="3" ellipsis="..." trimRight basedOn="letters" />
                </div>
              </Link>
            ))}
          </NewsTicker>
        </div>
      </div>
      <Link to={"/market"} className={`${fontSizes.px12} white ${styles.btn}`}>
        مشاهده همۀ سفارش‌ها
      </Link>
    </div>
  );
};

export default HeroColumn;
