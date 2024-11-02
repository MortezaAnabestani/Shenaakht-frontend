import React from "react";
import styles from "../../../styles/poll/featuredPolls.module.css";
import { Link } from "react-router-dom";
const FeaturedPolls = () => {
  return (
    <div className={`col-12 col-md-9 ${styles.featuredPollsContainer}`}>
      <div className={styles.mainContentTitle}>
        <h6>نظرسنجی‌ها</h6>
        <img src="./assets/images/lines/barline.svg" alt="bar line" />
        <Link to={"/polls"} className={`btn btn-outline-dark btn-sm ${styles.readMore}`}>
          مطالعۀ بیش‌تر
        </Link>
      </div>
      <div className={"album py-2 d-none d-md-block"}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPolls;
