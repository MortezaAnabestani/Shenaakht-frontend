import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const basicUrl = "http://localhost:8080/";

export const fetchAdminData = createAsyncThunk("adminData/fetchAdminData", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${basicUrl}api/isAuth`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const sendRegisterDataToServer = createAsyncThunk(
  `registerData/sendRegisterDataToServer`,
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${basicUrl}api/register`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const sendLoginDataToServer = createAsyncThunk(
  "loginData/sendLoginDataTpServer",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${basicUrl}api/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
