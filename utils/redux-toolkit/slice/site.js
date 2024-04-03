import { createSlice } from "@reduxjs/toolkit";

const siteSlice = createSlice({
  name: "site",
  initialState: {
    pageLoad: 0,
  },
  reducers: {
    setPageLoad: (state, action) => {
      state.pageLoad = action.payload;
    },
  },
});
export const { setPageLoad } = siteSlice.actions;
export default siteSlice.reducer;
