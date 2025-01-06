import styles from "../../../../styles/panel/admin/admin.module.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMainImagePreview } from "../../../../features/contents/createContentSlice";

const MainImageUpload = ({ mainImage, setFormData }) => {
  const dispatch = useDispatch();
  const { mainImagePreview } = useSelector((state) => state.createContent);

  useEffect(() => {
    // اگر تصویر از سرور دریافت شده باشد
    if (mainImage && mainImage?.dataUrl) {
      dispatch(setMainImagePreview(mainImage?.dataUrl)); // blob URL
    }
  }, [mainImage, dispatch]);

  const handleMainImageChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const urlFile = URL.createObjectURL(file);
      dispatch(setMainImagePreview(urlFile));
      console.log("file: >", file.name);
      dispatch(setFormData({ mainImage: file.name }));
    }
  };

  const imagePreviewURL = mainImagePreview?.payload || mainImagePreview;

  return (
    <div className={styles.createContent_title}>
      <label htmlFor="file" className="fs-10">
        انتخاب عکس اصلی
      </label>
      <input
        id="file"
        name="file"
        type="file"
        onChange={handleMainImageChange}
        accept="image/*"
        required
        className="btn btn-secondary"
        multiple={false}
      />
      {imagePreviewURL ? (
        <div className={`pt-4 pb-4 w-100 d-flex align-items-center justify-content-center`}>
          <img
            src={imagePreviewURL}
            alt="پیش‌نمایش تصویر اصلی"
            style={{ width: "300px", height: "300px", objectFit: "cover" }}
          />
        </div>
      ) : (
        <p className="text-center pt-3 text-muted fs-11">هنوز عکسی انتخاب نشده است</p>
      )}
      {imagePreviewURL && (
        <span className="d-flex fs-12 align-items-center mt-1">
          <img
            className="me-2 ms-1 cursor-pointer"
            src="/assets/images/icons/panel/admin/deleteIcon.svg"
            alt="delete icon"
            width="18px"
            onClick={() => {
              dispatch(setFormData({ mainImage: { file: null, dataUrl: null } }));
              dispatch(setMainImagePreview(null));
            }}
          />
          حذف عکس
        </span>
      )}
    </div>
  );
};

export default MainImageUpload;
