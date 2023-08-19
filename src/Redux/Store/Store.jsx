import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from '@reduxjs/toolkit/query'
import { persistReducer, PERSIST } from "redux-persist";
import signupReducer from "../ActionState/ActionState";
import  storage  from "redux-persist/lib/storage";


const persistconfig = {
    key: "root",
    storage,
  };

const persistedReducer = persistReducer(persistconfig, signupReducer);

 const store = configureStore({
  // reducer: {
  //   signup: signupReducer,
  // },
  reducer: {stores: persistedReducer },
  // reducer: { persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
        // ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
// setupListeners(store.dispatch)

export default store;

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

