import React, { useEffect, useState } from "react";
import styles from "../../../../styles/panel/admin/admin.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setSliderShow,
  setSliderType,
  setSliderImagePreviews,
} from "../../../../features/contents/createContentSlice";

const SliderImageHandler = ({ sliderImageLinks, sliderImages, setFormData }) => {
  const dispatch = useDispatch();
  const { slidershow, sliderType, sliderImagePreviews } = useSelector((state) => state.createContent);
  const [sliderImageFiles, setSliderImageFiles] = useState([]);

  const handleSliderLinkChange = (index, value) => {
    const updatedLinks = [...sliderImageLinks];
    updatedLinks[index] = value;
    setFormData((prevState) => ({
      ...prevState,
      sliderImageLinks: updatedLinks,
    }));
  };

  const addSliderLinkInput = () => {
    setFormData((prevState) => ({
      ...prevState,
      sliderImageLinks: [...sliderImageLinks, ""],
    }));
  };

  const removeSliderLinkInput = (index) => {
    const updatedLinks = [...sliderImageLinks];
    updatedLinks.splice(index, 1);
    setFormData((prevState) => ({
      ...prevState,
      sliderImageLinks: updatedLinks,
    }));
  };

  const handleSliderImageChange = (e) => {
    const files = Array.from(e.target.files);
    setSliderImageFiles(files);

    if (files && files.length > 0) {
      const previews = files.map((file) => URL.createObjectURL(file));
      dispatch(setSliderImagePreviews(previews));
    }
  };

  useEffect(() => {
    (sliderImageLinks || sliderImages) && dispatch(setSliderShow(false));
  }, [sliderImageLinks, sliderImages, dispatch]);

  const updateHandler = (index) => {
    const updatedFiles = sliderImageFiles.filter((_, i) => i !== index);
    setSliderImageFiles(updatedFiles);

    const updatedPreviews = sliderImagePreviews.filter((_, i) => i !== index);
    dispatch(setSliderImagePreviews(updatedPreviews));
  };

  const closeHandler = () => {
    dispatch(setSliderImagePreviews(null));
    dispatch(setSliderShow(!slidershow));
    setFormData((prevState) => ({
      ...prevState,
      sliderImageLinks: [],
      sliderImages: [],
    }));
    setSliderImageFiles([]);
    dispatch(setSliderType(""));
  };

  return (
    <>
      {slidershow ? (
        <div className="d-flex align-items-center me-1">
          <img
            src="/assets/images/icons/panel/admin/arrowLeftDouble.svg"
            className="ms-2 cursor-pointer btn p-1 btn-sm btn-outline-info rounded-5"
            id="subTitleshow"
            name="subTitleshow"
            onClick={() => dispatch(setSliderShow(!slidershow))}
            alt="close icon"
            width={"25px"}
          />
          <span className="fs-11">می‌خواهم گالری عکس (اسلایدر) بسازم</span>
        </div>
      ) : (
        <div className={styles.createContent_title}>
          <select
            id="sliderType"
            className="cursor-pointer bg-light"
            name="sliderType"
            value={sliderType}
            onChange={(e) => dispatch(setSliderType(e.target.value))}
          >
            <option value="" disabled>
              انتخاب نوع گالری
            </option>
            <option value={"uploadImage"}>گالری از طریق بارگذاری عکس</option>
            <option value={"linkImage"}>گالری از طریق پیوند</option>
          </select>
          {sliderType === "uploadImage" && (
            <div className={styles.createContent_title}>
              <label htmlFor="" className="fs-10">
                انتخاب عکس‌های اسلایدر
              </label>
              <input
                id="file"
                name="file"
                type="file"
                onChange={handleSliderImageChange}
                accept="image/*"
                required
                className="btn btn-secondary"
                multiple="true"
              />
              <div className="w-100 d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-around gap-4 flex-wrap mt-3">
                {Array.isArray(sliderImagePreviews) && sliderImagePreviews.length > 0 ? (
                  sliderImagePreviews.map((preview, index) => (
                    <div className={styles.imageCard}>
                      <span className="d-flex fs-12 align-items-center mt-1 ">
                        <img
                          className="me-2 ms-1 cursor-pointer"
                          src="/assets/images/icons/panel/admin/deleteIcon2.svg"
                          alt="delete icon"
                          width="18px"
                          onClick={() => updateHandler(index)}
                          loading="lazy"
                        />
                      </span>
                      <img
                        key={index}
                        src={preview}
                        alt={`preview-${index}`}
                        loading="lazy"
                        style={{ width: "250px", height: "250px", objectFit: "cover", margin: "5px" }}
                      />
                    </div>
                  ))
                ) : (
                  <p className="text-muted fs-11">هنوز عکسی انتخاب نشده است</p> // or no message at all
                )}
              </div>
            </div>
          )}
          {sliderType === "linkImage" && (
            <div>
              {sliderImageLinks?.map((link, index) => (
                <div key={index} className="d-flex align-items-center mt-2 mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="لینک عکس را وارد کنید"
                    value={link}
                    onChange={(e) => handleSliderLinkChange(index, e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="border-0 bg-transparent rounded-5"
                    onClick={() => removeSliderLinkInput(index)}
                    disabled={sliderImageLinks.length === 2}
                  >
                    <img
                      className="me-2 ms-1 cursor-pointer"
                      src="/assets/images/icons/panel/admin/deleteIcon.svg"
                      alt="delete icon"
                      width="18px"
                      loading="lazy"
                    />
                  </button>
                </div>
              ))}
              <button type="button" className="btn btn-secondary w-100 btn-sm" onClick={addSliderLinkInput}>
                + لینک جدید
              </button>
            </div>
          )}
          <span className="d-flex fs-12 align-items-center mt-1 ">
            <img
              className="me-2 ms-1 cursor-pointer"
              src="/assets/images/icons/panel/admin/deleteIcon.svg"
              alt="delete icon"
              width="18px"
              onClick={closeHandler}
              loading="lazy"
            />
            حذف اسلایدر
          </span>
        </div>
      )}
    </>
  );
};

export default SliderImageHandler;
