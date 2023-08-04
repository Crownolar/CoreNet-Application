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
  user: {},
  editorid: {},
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
    },
    EditorID: (state) => {
      state.user = null
    },
    clearUser: (state)=>{
      const clearAll= {}
      state.user= clearAll
    }
  },
});

export const { updateFormData, signUpSuccess, signUpFailure,clearUser, userData, updateFormDataSignin, SignoutAdmin, EditorID } = signupSlice.actions;
export default signupSlice.reducer;
