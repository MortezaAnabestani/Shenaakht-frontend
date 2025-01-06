const contentFormHandler = (formData, navigate) => {
  const newContent = new FormData();
  newContent.append("contentType", formData.contentType);
  newContent.append("categories", formData.categories);
  newContent.append("title", formData.title);
  newContent.append("subTitle", formData.subTitle || "");
  newContent.append("editorText", formData.editorText);

  if (formData.mainImage?.file) {
    newContent.append("mainImage", formData.mainImage.file);
  }
  if (formData.sliderImages && formData.sliderImages.length > 0) {
    for (const imageFile of formData.sliderImages) {
      newContent.append("sliderImages", imageFile);
    }
  }

  formData.sliderImageLinks?.forEach((link) => {
    newContent.append("sliderImageLinks", link);
  });

  formData.tags?.forEach((tag) => {
    newContent.append("tags", tag);
  });
  // navigate("/auth/admin");
};

export default contentFormHandler;
