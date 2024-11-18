import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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

const adminDataSlice = createSlice({
  name: "adminData",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAdminData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAdminData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default adminDataSlice.reducer;
