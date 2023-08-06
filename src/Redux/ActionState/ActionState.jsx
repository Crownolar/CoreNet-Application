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
  formDataWriter: {
    FullName: "",
    UserName: "",
    Email: "",
    Password: "",
  },
  formDatasignin: {
    Email: "",
    Password: "",
  },
  error: null,
  user: {},
  writer: {},
  // editorid: {},
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
    updateformDataWriter: (state, { payload }) => {
      state.formDataWriter = {
        ...state.formDataWriter,
        ...payload,
      }
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
    updateWriter: (state, { payload }) => {
      state.writer = payload
    },
    SignoutAdmin: (state) => {
        state.user = [];
    },
    // EditorID: (state) => {
    //   state.user = null
    // },
    clearUser: (state)=>{
      const clearAll= {}
      state.user= clearAll
    }
  },
});

export const { updateFormData, updateformDataWriter, signUpSuccess, signUpFailure,clearUser, userData, updateFormDataSignin, SignoutAdmin, updateWriter } = signupSlice.actions;
export default signupSlice.reducer;
