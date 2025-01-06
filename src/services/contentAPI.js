import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const basicUrl = "http://localhost:8080";

export const fetchTags = createAsyncThunk("readContent/fetchTags", async () => {
  try {
    const response = await axios.get(`${basicUrl}/api/tags`);
    return response.data;
  } catch (error) {
    throw Error("خطایی رخ داده است");
  }
});

export const sendTags = createAsyncThunk("createContent/sendTags", async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${basicUrl}/api/tags`, { name: data });
    return response.data;
  } catch (error) {
    if (error.response) {
      return rejectWithValue(error.response.data);
    } else if (error.request) {
      return rejectWithValue("Network error. Failed to connect to the server.");
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export const fetchCategories = createAsyncThunk("readContent/fetchCategories", async () => {
  try {
    const response = await axios.get(`${basicUrl}/api/category`);
    return response.data;
  } catch (error) {
    throw Error(" در فراخوانی دسته‌بندی، خطایی رخ داده است");
  }
});

export const fetchContentTypes = createAsyncThunk("readContent/fetchContentTypes", async () => {
  try {
    const response = await axios.get(`${basicUrl}/api/contentTypes`);
    return response.data;
  } catch (error) {
    throw Error(" در فراخوانی نوع محتوا، خطایی رخ داده است");
  }
});

export const sendNewContent = createAsyncThunk(
  "createContent/sendNewContent",
  async (newContent, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${basicUrl}/api/create-new-content`, newContent, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        console.error("Server Error:", error.response.data);
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        console.error("Network Error:", error.request);
        return rejectWithValue("Network error. Failed to connect to the server.");
      } else {
        console.error("Error:", error.message);
        return rejectWithValue(error.message);
      }
    }
  }
);

export const updateContent = createAsyncThunk("readContent/updateContent", async (contentId, formValue) => {
  try {
    const response = await axios.patch(`${basicUrl}/api/update-content/${contentId}`, formValue);
    return response.data;
  } catch (error) {
    throw Error(" در به‌روزرسانی محتوا، خطایی رخ داده است");
  }
});

export const fetchContentData = createAsyncThunk(
  "readContent/fetchContentData",
  async ({ currentPage, itemsPerPage }) => {
    try {
      const response = await axios.get(`${basicUrl}/api/contentsList`, {
        params: { page: currentPage + 1, pageSize: itemsPerPage },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching content data:", error);
    }
  }
);

export const deleteContentData = createAsyncThunk("deletContent/deleteContentData", async (deletedItemId) => {
  try {
    const response = await axios.delete(`${basicUrl}/api/contentsList/${deletedItemId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting content data:", error);
  }
});

export const fetchContentDataById = createAsyncThunk("readContent/fetchContentDataById", async (id) => {
  try {
    const response = await axios.get(`${basicUrl}/api/content/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching content by ID:", error);
    throw error;
  }
});

export const fetchMainImageURL = createAsyncThunk("readContent/fetchMainImageURL", async (mainImageId) => {
  try {
    const response = await axios.get(`${basicUrl}/api/mainImage/${mainImageId}`, { responseType: "blob" });
    const imageUrl = URL.createObjectURL(response.data);
    return imageUrl; // فقط URL برگشت داده شود
  } catch (error) {
    console.error("در فراخوانی آدرس عکس مشکلی پیش آمده است", error);
    throw error;
  }
});

export const fetchSliderImagesURL = createAsyncThunk(
  "readContent/fetchSliderImagesURL",
  async (sliderImagesId) => {
    try {
      const imageUrls = await Promise.all(
        sliderImagesId.map(async (sliderImageId) => {
          const response = await axios.get(`${basicUrl}/api/sliderImages/${sliderImageId}`, {
            responseType: "blob",
          });
          return URL.createObjectURL(response.data);
        })
      );
      return imageUrls;
    } catch (error) {
      console.error("Error fetching slider image URLs:", error);
      throw error;
    }
  }
);
