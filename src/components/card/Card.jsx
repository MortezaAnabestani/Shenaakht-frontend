import React from "react";
import styles from "../../styles/card/card.module.css";
import { Link } from "react-router-dom";
import moment from "moment-jalaali";

const Card = ({ title, slug, images, viewCount, createdAt, type, _id, mainRoute }) => {
  const id = _id?.$oid || _id;
  const route = type || mainRoute;
  const createTime = createdAt.$date || createdAt;
  return (
    <div className={`col-12 col-md-3`} id="articleSlider">
      <div className="card mb-0 pb-0 box-shadow">
        <Link to={route === mainRoute ? `${mainRoute}/${slug}-${id}` : `${slug}-${id}`}>
          <img className={`card-img-top ${styles.cardImage}`} src={images} alt={title} />
        </Link>
        <div className={`card-body ${styles.cardBody}`}>
          <small>
            <span>{moment(createTime, "YYYY/MM/DD").locale("fa").format("jD jMMMM jYYYY")}</span>
          </small>
          <h6 className={styles.cardTitle}>{title}</h6>
          <div className="d-flex justify-content-between align-self-end">
            <div className={`btn-group ${styles.btnPostion}`}>
              <Link
                to={route === mainRoute ? `${mainRoute}/${slug}-${id}` : `${slug}-${id}`}
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
