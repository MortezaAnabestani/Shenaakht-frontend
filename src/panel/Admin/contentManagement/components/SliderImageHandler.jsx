import React from "react";
import styles from "../../../../styles/panel/admin/admin.module.css";

const SliderImageHandler = ({
  slidershow,
  setSliderShow,
  sliderType,
  setSliderType,
  sliderImageLinks,
  setSliderImageLinks,
  handleSliderImageChange,
  sliderImagePreviews,
  setSliderImageUpload,
  setSliderImagePreviews,
}) => {
  const handleSliderLinkChange = (index, value) => {
    const updatedLinks = [...sliderImageLinks];
    updatedLinks[index] = value;
    setSliderImageLinks(updatedLinks);
  };

  const addSliderLinkInput = () => {
    setSliderImageLinks([...sliderImageLinks, ""]);
  };

  const removeSliderLinkInput = (index) => {
    const updatedLinks = [...sliderImageLinks];
    updatedLinks.splice(index, 1);
    setSliderImageLinks(updatedLinks);
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
            onClick={() => setSliderShow(!slidershow)}
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
            onChange={(e) => setSliderType(e.target.value)}
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
                className="btn btn-success"
                multiple="true"
              />
              <div className="w-100 d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-around gap-4 flex-wrap mt-3">
                {sliderImagePreviews &&
                  sliderImagePreviews.map((preview, index) => (
                    <div className={styles.imageCard}>
                      <span className="d-flex fs-12 align-items-center mt-1 ">
                        <img
                          className="me-2 ms-1 cursor-pointer"
                          src="/assets/images/icons/panel/admin/deleteIcon2.svg"
                          alt="delete icon"
                          width="18px"
                          onClick={() => {
                            setSliderImageUpload((prev) => prev.filter((_, i) => i !== index));
                            setSliderImagePreviews((prev) => prev.filter((_, i) => i !== index));
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
                  ))}
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
          {sliderImagePreviews ||
            (sliderImageLinks && (
              <span className="d-flex fs-12 align-items-center mt-1 ">
                <img
                  className="me-2 ms-1 cursor-pointer"
                  src="/assets/images/icons/panel/admin/deleteIcon.svg"
                  alt="delete icon"
                  width="18px"
                  onClick={() => {
                    setSliderImagePreviews(null);
                    setSliderShow(!slidershow);
                  }}
                />
                حذف اسلایدر
              </span>
            ))}
        </div>
      )}
    </>
  );
};

export default SliderImageHandler;
