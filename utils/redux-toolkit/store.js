import { configureStore } from "@reduxjs/toolkit";
import site from "./slice/site";

const store = configureStore({
  reducer: {
    site: site,
  },
});
export default store;
