import styles from "../../../../styles/panel/admin/admin.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMainImage, setMainImagePreview } from "../../../../features/contents/createContentSlice";

const MainImageUpload = ({ mainImage }) => {
  const dispatch = useDispatch();
  const { mainImagePreview } = useSelector((state) => state.createContent);

  const handleMainImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(setMainImagePreview(reader.result));
        dispatch(setMainImage({ file, dataUrl: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      dispatch(setMainImagePreview(null));
      dispatch(setMainImage(null));
    }
  };

  return (
    <div className={styles.createContent_title}>
      <label htmlFor="" className="fs-10">
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
      {mainImagePreview ? (
        <div className={`pt-4 pb-4 w-100 d-flex align-items-center justify-content-center`}>
          <img
            src={mainImagePreview}
            alt="پیش‌نمایش تصویر اصلی"
            style={{ width: "300px", height: "300px", objectFit: "cover" }}
          />
        </div>
      ) : (
        <p className="text-center pt-3 text-muted fs-11">هنوز عکسی انتخاب نشده است</p>
      )}
      {mainImage && (
        <span className="d-flex fs-12 align-items-center mt-1">
          <img
            className="me-2 ms-1 cursor-pointer"
            src="/assets/images/icons/panel/admin/deleteIcon.svg"
            alt="delete icon"
            width="18px"
            onClick={() => {
              dispatch({ file: null, dataUrl: null });
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
