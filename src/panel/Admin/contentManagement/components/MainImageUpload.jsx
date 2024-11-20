import styles from "../../../../styles/panel/admin/admin.module.css";
import React from "react";

const MainImageUpload = ({
  handleMainImageChange,
  mainImagePreview,
  mainImage,
  setMainImage,
  setMainImagePreview,
}) => {
  return (
    <div className={styles.createContent_title}>
      <label for="" className="fs-10">
        انتخاب عکس اصلی
      </label>
      <input
        id="file"
        name="file"
        type="file"
        onChange={handleMainImageChange}
        accept="image/*"
        required
        className="btn btn-success"
        multiple="false"
      />
      {mainImagePreview && (
        <div className={`pt-4 pb-4 w-100 d-flex align-items-center justify-content-center`}>
          <img
            src={mainImagePreview}
            alt="پیش‌نمایش تصویر اصلی"
            style={{ width: "300px", height: "300px", objectFit: "cover" }}
          />
        </div>
      )}
      {mainImage && (
        <span className="d-flex fs-12 align-items-center mt-1">
          <img
            className="me-2 ms-1 cursor-pointer"
            src="/assets/images/icons/panel/admin/deleteIcon.svg"
            alt="delete icon"
            width="18px"
            onClick={() => {
              setMainImage(null);
              setMainImagePreview(null);
            }}
          />
          حذف عکس
        </span>
      )}
    </div>
  );
};

export default MainImageUpload;
