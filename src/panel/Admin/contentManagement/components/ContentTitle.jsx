import React from "react";
import styles from "../../../../styles/panel/admin/admin.module.css";

const ContentTitle = ({ title, setTitle }) => {
  return (
    <div className={styles.createContent_title}>
      <label className="fs-10" htmlFor="title">
        عنوان:
      </label>
      <input
        id="title"
        name="title"
        value={title}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        required
      />
    </div>
  );
};

export default ContentTitle;
