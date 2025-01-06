import React from "react";
import styles from "../../styles/content/contentDetails.module.css";
import { Link } from "react-router-dom";

const MediaIconPart = () => {
  return (
    <div className={styles.mediaIcons}>
      <Link to="https://www.instagram.com/shenaakht_center/">
        <img src="/assets/images/icons/media/instagram.svg" alt="instagram icon" />
      </Link>
      <Link to="tg://resolve?domain=shenaakht_center">
        <img src="/assets/images/icons/media/telegram.svg" alt="telegram icon" />
      </Link>
      <Link to="https://twitter.com/ShenaakhtCenter">
        <img src="/assets/images/icons/media/twiiterX.svg" alt="twitter or x icon" />
      </Link>
      <Link to="https://eitaa.com/shenaakht_center">
        <img src="/assets/images/icons/media/eitaa.png" alt="eitaa icon" />
      </Link>
    </div>
  );
};

export default MediaIconPart;
