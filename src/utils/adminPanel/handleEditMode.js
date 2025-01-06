const handleEditMode = async (
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
) => {
  if (isEditMode) {
    const fetchAction = await dispatch(fetchContentDataById(id));
    const imageUrl = await dispatch(fetchMainImageURL(dataContentById?.mainImage));
    const sliderImagesFiles = await dispatch(fetchSliderImagesURL(dataContentById?.sliderImages));
    if (fetchAction.payload) {
      await dispatch(
        setFormData({
          contentType: fetchAction.payload.contentType || "",
          categories: fetchAction.payload.categories || [],
          title: fetchAction.payload.title || "",
          subTitle: fetchAction.payload.subTitle || "",
          mainImage: {
            file: fetchAction.payload.mainImage || null,
            dataUrl: imageUrl || null,
          },
          sliderImages:
            { file: fetchAction.payload.sliderImages || null, dataUrl: sliderImagesFiles || null } || [],
          sliderImageUrl: fetchAction.payload.sliderImageUrl || [],
          editorText: fetchAction.payload.editorText || "",
          tags: fetchAction.payload.tags || [],
        })
      );
    }
  } else {
    await dispatch(resetFormData());
    await dispatch(resetFormDataById());
  }
};

export default handleEditMode;
