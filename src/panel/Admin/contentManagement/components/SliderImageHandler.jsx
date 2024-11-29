import React from "react";
import styles from "../../../../styles/panel/admin/admin.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setSliderShow,
  setSliderType,
  setSliderImageLinks,
  setSliderImageUpload,
  setSliderImagePreviews,
} from "../../../../features/contents/createContentSlice";

const SliderImageHandler = ({ sliderImageLinks, sliderImageUpload }) => {
  const dispatch = useDispatch();
  const { slidershow, sliderType, sliderImagePreviews } = useSelector((state) => state.createContent);

  const handleSliderLinkChange = (index, value) => {
    const updatedLinks = [...sliderImageLinks];
    updatedLinks[index] = value;
    dispatch(setSliderImageLinks(updatedLinks));
  };

  const addSliderLinkInput = () => {
    dispatch(setSliderImageLinks([...sliderImageLinks, ""]));
  };

  const removeSliderLinkInput = (index) => {
    const updatedLinks = [...sliderImageLinks];
    updatedLinks.splice(index, 1);
    dispatch(setSliderImageLinks(updatedLinks));
  };

  const handleSliderImageChange = (e) => {
    const files = Array.from(e.target.files);
    dispatch(setSliderImageUpload(files)); //ذخیره فایلها برای سرور

    if (files) {
      const previews = [];
      const filesWithPreview = []; // Array to store both file and data URL

      files.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          previews.push(reader.result);
          filesWithPreview.push({ file, dataUrl: reader.result }); // Store both
          dispatch(setSliderImagePreviews([...previews]));
          dispatch(setSliderImageUpload([...filesWithPreview])); // Dispatch the array with both details
        };
        reader.readAsDataURL(file);
      });
    } else {
      dispatch(setSliderImagePreviews([]));
      dispatch(setSliderImageUpload([])); // Clear uploads if no files selected
    }
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
              <label for="" className="fs-10">
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
                          onClick={() => {
                            const updatedUploads = sliderImageUpload.filter((_, i) => i !== index);
                            const updatedPreviews = sliderImagePreviews.filter((_, i) => i !== index);
                            dispatch(setSliderImageUpload(updatedUploads));
                            dispatch(setSliderImagePreviews(updatedPreviews));
                          }}
                        />
                      </span>
                      <img
                        key={index}
                        src={preview}
                        alt={`preview-${index}`}
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
              onClick={() => {
                dispatch(setSliderImagePreviews(null));
                dispatch(setSliderShow(!slidershow));
              }}
            />
            حذف اسلایدر
          </span>
        </div>
      )}
    </>
  );
};

export default SliderImageHandler;
