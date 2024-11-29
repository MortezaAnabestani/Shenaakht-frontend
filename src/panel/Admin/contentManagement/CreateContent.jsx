import React from "react";
import styles from "../../../styles/panel/admin/admin.module.css";
import ContentType from "./components/ContentType";
import Category from "./components/Category";
import ContentTitle from "./components/ContentTitle";
import ContentSubTitle from "./components/ContentSubTitle";
import MainImageUpload from "./components/MainImageUpload";
import SliderImageHandler from "./components/SliderImageHandler";
import ContentTags from "./components/ContentTags";
import { useDispatch, useSelector } from "react-redux";
import { sendNewContent } from "../../../services/contentAPI";
import { setEditorContent } from "../../../features/contents/createContentSlice";
import PersianEditor from "./components/PersianEditor";

const CreateContent = () => {
  const dispatch = useDispatch();
  const {
    contentType,
    categoryType,
    title,
    subTitle,
    editorContent,
    mainImage,
    sliderImageUpload,
    sliderImageLinks,
    selectedTags,
  } = useSelector((state) => state.createContent);

  const formHandler = (e) => {
    e.preventDefault();
    const newContent = new FormData();
    newContent.append("contentType", contentType);
    newContent.append("categoryType", categoryType);
    newContent.append("title", title);
    newContent.append("subTitle", subTitle || "");
    newContent.append("editorContent", editorContent);
    if (mainImage.file) {
      newContent.append("mainImage", mainImage.file);
    }
    if (sliderImageUpload && sliderImageUpload.length > 0) {
      sliderImageUpload.forEach((image) => {
        if (image && image.file) {
          newContent.append("sliderImages", image.file);
        }
      });
    }
    if (sliderImageLinks && sliderImageLinks.length > 0) {
      sliderImageLinks.forEach((link) => {
        newContent.append("sliderImageLinks", link);
      });
    }
    newContent.append("selectedTags", selectedTags);
    dispatch(sendNewContent(newContent));
  };

  return (
    <div className={styles.createContentWrapper}>
      <div>
        <img
          className="ms-2 mb-1"
          src="/assets/images/icons/panel/admin/penIcon.svg"
          alt="pencil icon"
          width={"20px"}
        />
        ایجاد محتوای جدید
      </div>
      <form className={styles.formWrapper} onSubmit={formHandler}>
        <ContentType contentType={contentType} />
        <Category categoryType={categoryType} />
        <ContentTitle title={title} />
        <ContentSubTitle subTitle={subTitle} />
        <div className={styles.createContent_title}>
          <label className="fs-10" htmlFor="title">
            بدنۀ محتوا:
          </label>
          <PersianEditor editorContent={editorContent} setEditorContent={setEditorContent} />
        </div>
        <MainImageUpload mainImage={mainImage} />
        <SliderImageHandler sliderImageLinks={sliderImageLinks} sliderImageUpload={sliderImageUpload} />
        <ContentTags selectedTags={selectedTags} />
        <button className="btn btn-success w-100 mt-2" type="submit">
          ارسال محتوای جدید
        </button>
      </form>
    </div>
  );
};

export default CreateContent;
