import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/authSlice/signupSlice.js";
import loginReducer from "../features/authSlice/loginSlice.js";
import adminReducer from "../features/authSlice/adminSlice.js";
import createContentReducer from "../features/contents/createContentSlice.js";

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    admin: adminReducer,
    createContent: createContentReducer,
  },
});

export default store;
