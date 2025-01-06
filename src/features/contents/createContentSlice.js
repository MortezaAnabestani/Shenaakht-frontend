import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    contentType: "",
    categories: "",
    title: "",
    subTitle: "",
    mainImage: null,
    sliderImages: [],
    sliderImageUrl: [],
    editorText: "",
    tags: [],
  },
  subTitleshow: true,
  slidershow: true,
  sliderType: "",
  mainImagePreview: null,
  sliderImagePreviews: [],
  tagValue: "",
  selectedTags: [],
  faildTag: false,
  currentPage: 0,
  totalPages: 0,
  searchTerm: "",
};

const createContentSlice = createSlice({
  name: "createContent",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },
    resetFormData: (state) => {
      state.formData = initialState.formData;
      state.subTitleshow = initialState.subTitleshow;
      state.slidershow = initialState.slidershow;
      state.sliderType = initialState.sliderType;
      state.mainImagePreview = initialState.mainImagePreview;
      state.sliderImagePreviews = initialState.sliderImagePreviews;
      state.tagValue = initialState.tagValue;
      state.selectedTags = initialState.selectedTags;
      state.faildTag = initialState.faildTag;
    },
    setSubTitleshow: (state, action) => {
      state.subTitleshow = action.payload;
    },
    setSliderShow: (state, action) => {
      state.slidershow = action.payload;
    },
    setSliderType: (state, action) => {
      state.sliderType = action.payload;
    },
    setMainImagePreview: (state, action) => {
      state.mainImagePreview = action.payload;
    },
    setSliderImagePreviews: (state, action) => {
      state.sliderImagePreviews = action.payload;
    },
    setAvailableTags: (state, action) => {
      state.availableTags = action.payload;
    },
    setSelectedTags: (state, action) => {
      state.selectedTags = action.payload;
    },
    setFaildTag: (state, action) => {
      state.faildTag = action.payload;
    },
    setTagValue: (state, action) => {
      state.tagValue = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const {
  setFormData,
  resetFormData,
  setSubTitleshow,
  setSliderShow,
  setSliderType,
  setMainImagePreview,
  setSliderImagePreviews,
  setSelectedTags,
  setFaildTag,
  setTagValue,
  setCurrentPage,
  setSearchTerm,
  setTotalPages,
} = createContentSlice.actions;

export default createContentSlice.reducer;
