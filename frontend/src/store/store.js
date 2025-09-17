import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // register slices here, e.g. user: userReducer
  },
});

export default store;
