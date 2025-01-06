import { createSlice } from "@reduxjs/toolkit";
import { updateContent } from "../../services/contentAPI";

const initialState = {
  updateLoading: false,
  updateData: null,
  updateError: null,
};

const updateContentSlice = createSlice({
  name: "updateContent",
  initialState,
  reducers: {
    setEdit: (state, action) => {
      state.edit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateContent.pending, (state) => {
        state.updateLoading = true;
      })
      .addCase(updateContent.fulfilled, (state, action) => {
        state.updateLoading = false;
        // state.updateData = state.map((content) =>
        //   content._id === action.payload._id ? action.payload : content
        // );
      })
      .addCase(updateContent.rejected, (state, action) => {
        state.updateLoading = false;
        state.updateError = action.payload;
      });
  },
});

export default updateContentSlice.reducer;
