import { createSlice } from "@reduxjs/toolkit";
import { sendLoginDataToServer } from "../../services/authAPI";

const loginDataSlice = createSlice({
  name: "loginData",
  initialState: {
    email: "",
    password: "",
    showPass: false,
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setShowPass: (state, action) => {
      state.showPass = action.payload;
    },
  },
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

export const { setEmail, setPassword, setShowPass } = loginDataSlice.actions;

export default loginDataSlice.reducer;
