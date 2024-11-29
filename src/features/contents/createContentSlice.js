import { createSlice } from "@reduxjs/toolkit";
import { fetchTags, fetchCategories, fetchContentTypes } from "../../services/contentAPI";

const initialState = {
  title: "",
  subTitle: "",
  subTitleshow: true,
  slidershow: true,
  mainImage: { file: null, dataUrl: null },
  sliderImageUpload: [],
  sliderImageLinks: [],
  sliderType: "",
  editorContent: "",
  mainImagePreview: null,
  sliderImagePreviews: [],
  tagValue: "",
  //tag
  dataTag: null,
  loadingTag: false,
  errorTag: null,
  selectedTags: [],
  faildTag: false,
  // category
  categoryType: "",
  dataCategory: null,
  loadingCategory: false,
  errorCategory: null,
  // content type
  contentType: "",
  dataContentType: null,
  loadingContentType: false,
  errorContentType: null,
};

const createContentSlice = createSlice({
  name: "createContent",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setSubTitle: (state, action) => {
      state.subTitle = action.payload;
    },
    setSubTitleshow: (state, action) => {
      state.subTitleshow = action.payload;
    },
    setSliderShow: (state, action) => {
      state.slidershow = action.payload;
    },
    setContentType: (state, action) => {
      state.contentType = action.payload;
    },
    setCategoryType: (state, action) => {
      state.categoryType = action.payload;
    },
    setMainImage: (state, action) => {
      state.mainImage = action.payload;
    },
    setSliderImageUpload: (state, action) => {
      state.sliderImageUpload = action.payload;
    },
    setSliderImageLinks: (state, action) => {
      state.sliderImageLinks = action.payload;
    },
    setSliderType: (state, action) => {
      state.sliderType = action.payload;
    },
    setEditorContent: (state, action) => {
      state.editorContent = action.payload;
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
  },
  extraReducers: (builder) => {
    builder
      //fetch tags
      .addCase(fetchTags.pending, (state) => {
        state.loadingTag = true;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.loadingTag = false;
        state.dataTag = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.loadingTag = false;
        state.errorTag = action.payload;
      })
      //fetch categories
      .addCase(fetchCategories.pending, (state) => {
        state.loadingCategory = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loadingCategory = false;
        state.dataCategory = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loadingCategory = false;
        state.errorCategory = action.payload;
      })
      //fetch content types
      .addCase(fetchContentTypes.pending, (state) => {
        state.loadingContentType = true;
      })
      .addCase(fetchContentTypes.fulfilled, (state, action) => {
        state.loadingContentType = false;
        state.dataContentType = action.payload;
      })
      .addCase(fetchContentTypes.rejected, (state, action) => {
        state.loadingContentType = false;
        state.errorContentType = action.payload;
      });
  },
});

export const {
  setTitle,
  setSubTitle,
  setSubTitleshow,
  setSliderShow,
  setContentType,
  setCategoryType,
  setMainImage,
  setSliderImageUpload,
  setSliderImageLinks,
  setSliderType,
  setEditorContent,
  setMainImagePreview,
  setSliderImagePreviews,
  setSelectedTags,
  setFaildTag,
  setTagValue,
} = createContentSlice.actions;

export default createContentSlice.reducer;
