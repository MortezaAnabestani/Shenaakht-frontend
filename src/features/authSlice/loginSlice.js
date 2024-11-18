import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const basicUrl = "http://localhost:8080/";

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

const loginDataSlice = createSlice({
  name: "loginData",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendLoginDataToServer.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendLoginDataToServer.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(sendLoginDataToServer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default loginDataSlice.reducer;
