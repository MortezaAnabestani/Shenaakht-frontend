import React, { useEffect, useRef } from "react";
import styles from "../../../styles/home/card/sliderCards.module.css";
import { Link } from "react-router-dom";
import moment from "moment-jalaali";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

const SliderCards = ({ items, numberOfCards, mainRoute }) => {
  const sliderRef = useRef();

  useEffect(() => {
    if (sliderRef.current) {
      new Splide(sliderRef.current, {
        type: "loop",
        padding: "5rem",
        autoplay: false,
      }).mount();
    }
  }, [items]);

  return (
    <div className={`${styles.slider}`}>
      <div className="example-module--example-content--1aX8- example-module--example-content-has-tab--idWc-">
        <div
          id="side-padding-slider"
          className="example-module--example-slider--PcwLi example-module--example-slider-active---eMS5"
          role="tabpanel"
          aria-hidden="false"
          aria-label="Carousel preview"
        >
          <div id="side-padding-wrapper" className="splide-wrapper site">
            <div
              id="side-padding"
              className="splide"
              ref={sliderRef} // اضافه کردن ref به اسلایدر
              aria-labelledby="side-padding-heading"
              role="region"
              aria-roledescription="carousel"
            >
              <div
                className={`splide__track ${styles.sliderWrapper}`}
                id="side-padding-track"
                aria-live="polite"
                aria-atomic="true"
                aria-busy="false"
              >
                <ul className="splide__list" id="side-padding-list" role="presentation">
                  {items.map((item, index) => (
                    <li
                      key={index} // اضافه کردن کلید منحصر به فرد
                      className="splide__slide is-visible"
                      id={`side-padding-slide0${index}`}
                      role="tabpanel"
                      aria-roledescription="slide"
                      aria-label={`${index + 1} of ${numberOfCards}`}
                    >
                      <div className={styles.sliderCard}>
                        <div className="card mb-4 box-shadow">
                          <Link to={`/${mainRoute}/${item.slug}`}>
                            <img className="card-img-top" src={item.images} alt={item.title} />
                          </Link>
                          <div className={`card-body ${styles.sliderCardBody}`}>
                            <small className={`${styles.sliderCardBodyInfo_right} text-start`}>
                              ارسال‌شده در
                              {moment(item.createdAt?.$date, "YYYY/MM/DD")
                                .locale("fa")
                                .format("jD jMMMM jYYYY")}
                            </small>
                            <h6 className="text-center">{item.title}</h6>
                          </div>
                          <small className={`text-muted ${styles.sliderCardBodyInfo_left}`}>
                            بازدید: {item.viewCount}
                          </small>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCards;
