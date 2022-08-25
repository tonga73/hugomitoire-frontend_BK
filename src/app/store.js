import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import adminReducer from "../features/admin/adminSlice";

const reducer = {
  admin: adminReducer,
  counterReducer,
};

export const store = configureStore({
  reducer,
});
