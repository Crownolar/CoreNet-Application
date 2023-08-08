import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, PERSIST } from "redux-persist";
import signupReducer from "../ActionState/ActionState";
import  storage  from "redux-persist/lib/storage";


const persistconfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistconfig, signupReducer);

export const store = configureStore({
  // reducer: {
  //   signup: signupReducer,
  // },
  reducer: { persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

// export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import { persistReducer, PERSIST } from "redux-persist";
// import  storage  from "redux-persist/lib/storage";
// import productReducer from '../ProductState/ProductState'

// const persistconfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistconfig, productReducer);

// export const store = configureStore({
//   reducer: { persistedReducer },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [PERSIST],
//       },
//     }),
// });

