import React, { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../../styles/panel/admin/admin.module.css";
import ContentType from "./components/ContentType";
import Category from "./components/Category";
import ContentTitle from "./components/ContentTitle";
import ContentSubTitle from "./components/ContentSubTitle";
import MainImageUpload from "./components/MainImageUpload";
import SliderImageHandler from "./components/SliderImageHandler";
import ContentTags from "./components/ContentTags";
import {
  fetchContentDataById,
  fetchMainImageURL,
  fetchSliderImagesURL,
  sendNewContent,
  updateContent,
} from "../../../services/contentAPI";
import PersianEditor from "./components/PersianEditor";
import { setFormData, resetFormData } from "../../../features/contents/createContentSlice";
import Loading from "../../../components/other/Loading";
import { resetFormDataById } from "../../../features/contents/readContentSlice";
import contentFormHandler from "../../../utils/adminPanel/contentFormHandler";
import handleEditMode from "../../../utils/adminPanel/handleEditMode";

const CreateContent = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);

  const { dataContentById, loadingContentById, errorContentById } = useSelector((state) => state.readContent);
  const formData = useSelector((state) => state.createContent.formData);

  useEffect(() => {
    const resetData = () => {
      dispatch(resetFormData());
      dispatch(resetFormDataById());
    };

    if (location.pathname === "/create") {
      resetData();
    }
  }, [location.pathname, dispatch]);

  useEffect(() => {
    handleEditMode(
      isEditMode,
      dispatch,
      fetchContentDataById,
      id,
      fetchMainImageURL,
      dataContentById,
      fetchSliderImagesURL,
      setFormData,
      resetFormData,
      resetFormDataById
    );
  }, []);

  const formHandler = (e) => {
    e.preventDefault();
    contentFormHandler(formData, navigate);
    dispatch(isEditMode ? updateContent(formData, id) : sendNewContent(formData));
  };

  if (isEditMode && (loadingContentById || !dataContentById)) {
    return <Loading />;
  }
  if (errorContentById) {
    return <p className="text-danger">خطا: {errorContentById}</p>;
  }

  console.log("formData: ", formData);
  console.log("mainImg: ", formData.mainImage);

  return (
    <div className={styles.createContentWrapper}>
      <div>
        <img
          className="ms-2 mb-1"
          src="assets/images/icons/panel/admin/penIcon.svg"
          alt="pencil icon"
          width={"20px"}
        />
        {isEditMode ? "ویرایش محتوا" : "ایجاد محتوای جدید"}
      </div>
      <form className={styles.formWrapper} onSubmit={formHandler}>
        <ContentType contentType={formData.contentType} setFormData={setFormData} />
        <Category categories={formData.categories} setFormData={setFormData} />
        <ContentTitle title={formData.title} setFormData={setFormData} />
        <ContentSubTitle subTitle={formData.subTitle} setFormData={setFormData} />
        <div className={styles.createContent_title}>
          <label className="fs-10" htmlFor="editorText">
            بدنۀ محتوا:
          </label>
          <PersianEditor editorText={formData.editorText} setFormData={setFormData} />
        </div>
        <MainImageUpload mainImage={formData?.mainImage} setFormData={setFormData} />
        <SliderImageHandler
          sliderImageLinks={formData.sliderImageUrl}
          sliderImages={formData?.sliderImages}
          setFormData={setFormData}
        />
        <ContentTags tags={formData.tags} setFormData={setFormData} />
        <button className="btn btn-success w-100 mt-2" type="submit">
          {isEditMode ? "ذخیره تغییرات" : "ارسال محتوای جدید"}
        </button>
      </form>
    </div>
  );
};

export default CreateContent;
