import React from "react";
import styles from "../../../styles/home/heroSlider.module.css";

const HeroSlider = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className={`carousel slide col-12 col-md-7 mb-3 ${styles.carouselSet}`}
      data-bs-ride="false"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/assets/images/heroSliders/pollbanner1.png" className="d-block w-100" alt="pollbanner1" />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="mb-0 text-dark">First slide label</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/assets/images/heroSliders/pollbanner2.png" className="d-block w-100" alt="pollbanner2" />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="mb-0 text-dark">Second slide label</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/assets/images/heroSliders/pollbanner3.png" className="d-block w-100" alt="pollbanner3" />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="mb-0 text-dark">Third slide label</h5>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HeroSlider;
