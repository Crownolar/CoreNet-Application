import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "../ActionState/ActionState";

const store = configureStore({
  reducer: {
    signup: signupReducer,
  },
});

export default store;
