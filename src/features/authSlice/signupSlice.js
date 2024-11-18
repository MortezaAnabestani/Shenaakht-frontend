import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const basicUrl = "http://localhost:8080/";

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

const registerDataSlice = createSlice({
  name: "registerData",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendRegisterDataToServer.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendRegisterDataToServer.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(sendRegisterDataToServer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default registerDataSlice.reducer;
