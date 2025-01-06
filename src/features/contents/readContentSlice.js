import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTags,
  fetchCategories,
  fetchContentTypes,
  fetchContentData,
  fetchContentDataById,
  fetchMainImageURL,
  fetchSliderImagesURL,
} from "../../services/contentAPI";

const initialState = {
  //content by id
  dataContentById: null,
  loadingContentById: false,
  errorContentById: null,

  //content
  dataContent: null,
  loadingContent: false,
  errorContent: null,

  //tag
  dataTag: null,
  loadingTag: false,
  errorTag: null,

  //category
  dataCategory: null,
  loadingCategory: false,
  errorCategory: null,

  //contentType
  dataContentType: null,
  loadingContentType: false,
  errorContentType: null,

  //main image url
  dataImageURL: null,
  loadingImageURL: false,
  errorImageURL: null,

  //main image url
  dataSliderImageURL: null,
  loadingSliderImageURL: false,
  errorSliderImageURL: null,
};

const readContentSlice = createSlice({
  name: "readContent",
  initialState,
  reducers: {
    resetFormDataById: (state) => {
      state.dataContentById = initialState.dataContentById;
    },
  },
  extraReducers: (builder) => {
    builder
      //fetch content
      .addCase(fetchContentData.pending, (state) => {
        state.loadingContent = true;
      })
      .addCase(fetchContentData.fulfilled, (state, action) => {
        state.loadingContent = false;
        state.dataContent = action.payload;
      })
      .addCase(fetchContentData.rejected, (state, action) => {
        state.loadingContent = false;
        state.errorContent = action.payload;
      })
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
      })

      //fetch content by id
      .addCase(fetchContentDataById.pending, (state) => {
        state.loadingContentById = true;
      })
      .addCase(fetchContentDataById.fulfilled, (state, action) => {
        state.loadingContentById = false;
        state.dataContentById = action.payload;
      })
      .addCase(fetchContentDataById.rejected, (state, action) => {
        state.loadingContentById = false;
        state.errorContentById = action.payload;
      })

      //fetch image url
      .addCase(fetchMainImageURL.pending, (state) => {
        state.loadingImageURL = true;
      })
      .addCase(fetchMainImageURL.fulfilled, (state, action) => {
        state.loadingImageURL = false;
        state.dataImageURL = action.payload;
      })
      .addCase(fetchMainImageURL.rejected, (state, action) => {
        state.loadingImageURL = false;
        state.errorImageURL = action.payload;
      })

      //fetch slider images url
      .addCase(fetchSliderImagesURL.pending, (state) => {
        state.loadingSliderImageURL = true;
      })
      .addCase(fetchSliderImagesURL.fulfilled, (state, action) => {
        state.loadingSliderImageURL = false;
        state.dataSliderImageURL = action.payload;
      })
      .addCase(fetchSliderImagesURL.rejected, (state, action) => {
        state.loadingSliderImageURL = false;
        state.errorSliderImageURL = action.payload;
      });
  },
});

export const { resetFormDataById } = readContentSlice.actions;

export default readContentSlice.reducer;
