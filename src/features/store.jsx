import { configureStore } from "@reduxjs/toolkit";
import reecoReducer from "./reeco/reecoSlice";

export const Store = configureStore({
  reducer: {
    reeco: reecoReducer,
  },
});
