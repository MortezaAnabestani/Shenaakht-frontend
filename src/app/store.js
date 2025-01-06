import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/authSlice/signupSlice.js";
import loginReducer from "../features/authSlice/loginSlice.js";
import adminReducer from "../features/authSlice/adminSlice.js";
import createContentReducer from "../features/contents/createContentSlice.js";
import readContentReducer from "../features/contents/readContentSlice.js";
import updateContentReducer from "../features/contents/updateContentSlice.js";
import deleteContentReducer from "../features/contents/deleteContentSlice.js";

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    admin: adminReducer,
    createContent: createContentReducer,
    readContent: readContentReducer,
    updateContent: updateContentReducer,
    deleteContent: deleteContentReducer,
  },
});

export default store;
