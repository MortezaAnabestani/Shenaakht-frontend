import { createSlice } from "@reduxjs/toolkit";
import { sendRegisterDataToServer } from "../../services/authAPI";

const registerDataSlice = createSlice({
  name: "registerData",
  initialState: {
    name: "",
    email: "",
    mobile: "",
    password: "",
    isPasswordFocused: false,
    showPass: false,
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setMobile: (state, action) => {
      state.mobile = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setIsPasswordFocused: (state, action) => {
      state.isPasswordFocused = action.payload;
    },
    setShowPass: (state, action) => {
      state.showPass = action.payload;
    },
  },
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

export const { setName, setEmail, setMobile, setPassword, setIsPasswordFocused, setShowPass } =
  registerDataSlice.actions;

export default registerDataSlice.reducer;
