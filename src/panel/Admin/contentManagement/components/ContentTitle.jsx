import React from "react";
import styles from "../../../../styles/panel/admin/admin.module.css";
import { useDispatch } from "react-redux";

const ContentTitle = ({ title, setFormData }) => {
  const dispatch = useDispatch();

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
        onChange={(e) => dispatch(setFormData({ title: e.target.value }))}
        required
      />
    </div>
  );
};

export default ContentTitle;
