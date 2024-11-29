import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const basicUrl = "http://localhost:8080";

export const fetchTags = createAsyncThunk("createContent/fetchTags", async () => {
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

export const fetchCategories = createAsyncThunk("createContent/fetchCategories", async () => {
  try {
    const response = await axios.get(`${basicUrl}/api/category`);
    return response.data;
  } catch (error) {
    throw Error(" در فراخوانی دسته‌بندی، خطایی رخ داده است");
  }
});

export const fetchContentTypes = createAsyncThunk("createContent/fetchContentTypes", async () => {
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
      }); // <-- Add / and wrap data
      return response.data;
    } catch (error) {
      // Improved error handling:  Include specific error details
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
