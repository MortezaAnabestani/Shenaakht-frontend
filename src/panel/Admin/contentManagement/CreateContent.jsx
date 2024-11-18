import React, { useState } from "react";
import styles from "../../../styles/panel/admin/admin.module.css";

const CreateContent = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [subTitleshow, setSubTitleshow] = useState(false);
  const [contentType, setContentType] = useState([]);

  console.log(subTitleshow);

  const formHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.createContentWrapper}>
      <heading>
        <img
          className="ms-2 mb-1"
          src="/assets/images/icons/panel/admin/penIcon.svg"
          alt="pencil icon"
          width={"20px"}
        />
        ایجاد محتوای جدید
      </heading>
      <form className={styles.formWrapper} onSubmit={formHandler}>
        <div className={styles.createContent_type}>
          <label className="fs-10" htmlFor="contentType">
            نوع محتوا:
          </label>
          <select
            id="contentType"
            name="contentType"
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
            required
          >
            <option value={""} disabled>
              انتخاب نوع محتوا
            </option>
            {contentType.map((types) => (
              <option key={types.name} value={types._id}>
                {types.name}
              </option>
            ))}
          </select>
        </div>
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
        <div>
          {subTitleshow ? (
            <div className="d-flex align-items-center">
              <input
                className="ms-2"
                id="subTitleshow"
                name="subTitleshow"
                type="checkbox"
                onClick={() => setSubTitleshow(!subTitleshow)}
              />
              <span className="fs-11">می‌خواهم از زیرعنوان استفاده کنم</span>
            </div>
          ) : (
            <div className={`${styles.createContent_title}`}>
              <label className="fs-11" htmlFor="subTitle">
                زیر عنوان:
              </label>
              <input
                id="subTitle"
                name="subTitle"
                value={subTitle}
                type="text"
                onChange={(e) => setSubTitle(e.target.value)}
              />
              <span className="d-flex fs-12 align-items-center mt-1 ">
                <img
                  className="me-2 ms-1 cursor-pointer"
                  src="/assets/images/icons/panel/admin/deleteIcon.svg"
                  alt="delete icon"
                  width="17px"
                  onClick={() => setSubTitleshow(!subTitleshow)}
                />
                حذف زیرعنوان
              </span>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateContent;
