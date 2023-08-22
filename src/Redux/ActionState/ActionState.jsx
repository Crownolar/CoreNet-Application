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
  // writerInfo: {
  //   FullName: "",
  //   UserName: "",
  //   Email: "",
  //   Password: "",
  // },
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
  writerlist: [],
  writerid: [{}],
  taskId: {}
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
      };
    },
    updateFormDataSignin: (state, { payload }) => {
      state.formDatasignin = {
        ...state.formDatasignin,
        ...payload,
      };
    },
    // updateWriterInfo: (state, { payload }) => {
    //   state.writerInfo = {
    //     ...state.writerInfo,
    //     ...payload,
    //   };
    // },
    signUpSuccess: (state) => {
      state.error = null;
    },
    signUpFailure: (state, { payload }) => {
      state.error = payload;
    },
    userData: (state, { payload }) => {
      state.user = payload;
    },
    updateWriter: (state, { payload }) => {
      state.writer = payload;
    },
    SignoutAdmin: (state) => {
      state.user = [];
    },
    // EditorID: (state) => {
    //   state.user = null
    // },
    clearUser: (state) => {
      const clearAll = {};
      state.user = clearAll;
    },
    clearWriter: (state) => {
      const clearAll = {};
      state.writer = clearAll;
    },
    AllWriters: (state, { payload }) => {
      state.writer = payload;
      console.log("allwriters", payload);
    },
    updateWriterList: (state, { payload }) => {
      state.writerlist = payload;
    },
    updateWriterId: (state, { payload }) => {
      state.writerid = payload;
    },
    updateTaskId: (state, {payload}) => {
      state.taskId = payload
    },
  },
});

export const {
  updateFormData,
  updateformDataWriter,
  // updateWriterInfo,
  signUpSuccess,
  signUpFailure,
  clearUser,
  clearWriter,
  userData,
  updateFormDataSignin,
  SignoutAdmin,
  updateWriter,
  AllWriters,
  updateWriterList,
  updateWriterId,
  updateTaskId,
} = signupSlice.actions;
export default signupSlice.reducer;
