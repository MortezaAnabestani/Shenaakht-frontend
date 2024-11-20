import React, { useState } from "react";
import styles from "../../../styles/panel/admin/admin.module.css";
import ContentType from "./components/ContentType";
import CategoryType from "./components/CategoryType";
import ContentTitle from "./components/ContentTitle";
import ContentSubTitle from "./components/ContentSubTitle";
import MainImageUpload from "./components/MainImageUpload";
import SliderImageHandler from "./components/SliderImageHandler";
import TextEditor from "./components/TextEditor";

const CreateContent = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [subTitleshow, setSubTitleshow] = useState(true);
  const [slidershow, setSliderShow] = useState(true);
  const [contentType, setContentType] = useState("");
  const [categoryType, setCategoryType] = useState([]);
  const [mainImage, setMainImage] = useState("");
  const [sliderImageUpload, setSliderImageUpload] = useState([]);
  const [sliderImageLinks, setSliderImageLinks] = useState(["", ""]);
  const [sliderType, setSliderType] = useState("");
  const [editorText, setEditorText] = useState("");
  const [mainImagePreview, setMainImagePreview] = useState(null);
  const [sliderImagePreviews, setSliderImagePreviews] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();
  };

  const handleEditorChange = (content) => {
    setEditorText(content);
    console.log("editor content: ", content);
  };

  const handleMainImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMainImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setMainImage(file); // ذخیره فایل برای ارسال به سرور
    } else {
      setMainImagePreview(null);
      setMainImage(null);
    }
  };

  const handleSliderImageChange = (e) => {
    const files = Array.from(e.target.files);
    setSliderImageUpload(files); //ذخیره فایلها برای سرور

    if (files) {
      const previews = [];
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          previews.push(reader.result);
          setSliderImagePreviews([...previews]);
        };
        reader.readAsDataURL(file);
      });
    } else {
      setSliderImagePreviews([]);
    }
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
        <ContentType contentType={contentType} setContentType={setContentType} />
        <CategoryType categoryType={categoryType} setCategoryType={setCategoryType} />
        <ContentTitle title={title} setTitle={setTitle} />
        <ContentSubTitle
          subTitleshow={subTitleshow}
          setSubTitleshow={setSubTitleshow}
          subTitle={subTitle}
          setSubTitle={setSubTitle}
        />
        <div className={styles.createContent_title}>
          <label className="fs-10" htmlFor="title">
            بدنۀ محتوا:
          </label>
          <TextEditor
            placeholder="متن بدنۀ محتوا را این‌جا بنویسید"
            onChange={handleEditorChange}
            initialText={""}
          />
        </div>

        <MainImageUpload
          mainImage={mainImage}
          setMainImage={setMainImage}
          setMainImagePreview={setMainImagePreview}
          handleMainImageChange={handleMainImageChange}
          mainImagePreview={mainImagePreview}
        />
        <SliderImageHandler
          slidershow={slidershow}
          setSliderShow={setSliderShow}
          sliderType={sliderType}
          setSliderType={setSliderType}
          sliderImageLinks={sliderImageLinks}
          setSliderImageLinks={setSliderImageLinks}
          handleSliderImageChange={handleSliderImageChange}
          sliderImagePreviews={sliderImagePreviews}
          setSliderImageUpload={setSliderImageUpload}
          setSliderImagePreviews={setSliderImagePreviews}
        />
      </form>
    </div>
  );
};

export default CreateContent;
