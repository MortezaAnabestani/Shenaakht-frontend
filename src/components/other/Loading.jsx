import React from "react";
import styles from "../../styles/other/loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loadingWrapper}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loading;
