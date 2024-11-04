import React from "react";
import styles from "../../../styles/home/card/card.module.css";
import { Link } from "react-router-dom";
import moment from "moment-jalaali";

const Card = ({ mainRoute, title, slug, images, viewCount, createdAt }) => {
  return (
    <div className="col-12 col-md-3" id="articleSlider">
      <div className="card mb-4 box-shadow">
        <Link to={`/${mainRoute}/${slug}`}>
          <img className={`card-img-top ${styles.cardImage}`} src={images} alt={title} />
        </Link>
        <div className={`card-body ${styles.cardBody}`}>
          <small>
            ارسال‌شده در
            <span>{moment(createdAt?.$date, "YYYY/MM/DD").locale("fa").format("jD jMMMM jYYYY")}</span>
          </small>
          <h6 className={styles.cardTitle}>{title}</h6>
          <div className="d-flex justify-content-between align-self-end">
            <div className={`btn-group ${styles.btnPostion}`}>
              <Link
                to={`/${mainRoute}/${slug}`}
                className={`${styles.readMore} btn btn-sm btn-outline-secondary`}
              >
                مطالعۀ بیش‌تر
              </Link>
            </div>
            <small className={`text-muted ${styles.viewCountPostion}`}>
              بازدید: <span>{viewCount}</span>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
