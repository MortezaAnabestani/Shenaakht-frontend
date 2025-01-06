import { createSlice, current } from "@reduxjs/toolkit";
import { deleteContentData } from "../../services/contentAPI";

const initialState = {
  deleteData: null,
  deleteDataLoading: false,
  deleteDataError: null,
  showModal: false,
  deletedItemId: null,
};

const deleteContentSlice = createSlice({
  name: "deleteContent",
  initialState,
  reducers: {
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    setDeletedItemId: (state, action) => {
      state.deletedItemId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //delete contents
      .addCase(deleteContentData.pending, (state) => {
        state.deleteDataLoading = true;
      })
      .addCase(deleteContentData.fulfilled, (state, action) => {
        state.deleteDataLoading = false;
        state.deleteData = action.payload;
      })
      .addCase(deleteContentData.rejected, (state, action) => {
        state.deleteDataLoading = false;
        state.deleteDataError = action.payload;
      });
  },
});

export const { setShowModal, setDeletedItemId } = deleteContentSlice.actions;

export default deleteContentSlice.reducer;
