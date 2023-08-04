// signupReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    FirstName: "",
    Surname: "",
    UserName: "",
    Email: "",
    Password: "",
    CompanyName: "",
  },
  formDatasignin: {
    UserName: "",
    Password: "",
  },
  error: null,
  user: [],
//   signout:"",
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    updateFormData: (state, { payload }) => {
      state.formData = {
        ...state.formData,
        ...payload,
      };
    },
    updateFormDataSignin: (state, { payload }) => {
      state.formDatasignin = {
        ...state.formDatasignin,
        ...payload,
      };
    },
    signUpSuccess: (state) => {
      state.error = null;
    },
    signUpFailure: (state, { payload }) => {
      state.error = payload;
    },
    userData: (state, { payload }) => {
        state.user = payload
    },
    SignoutAdmin: (state) => {
        state.user = [];
    }
  },
});

export const { updateFormData, signUpSuccess, signUpFailure, userData, updateFormDataSignin, SignoutAdmin } = signupSlice.actions;
export default signupSlice.reducer;
