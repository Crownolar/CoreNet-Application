import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./Authentication/ContextApi/Contextapi.jsx";
import { Provider } from "react-redux";
// import { store } from "../src/Redux/Store/Store.jsx";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
// import persistStore from "redux-persist";
import { TimerProvider } from "./Authentication/ContextApi/TimeContext/TimeContext.jsx";
import store from "./Redux/Store/Store.jsx";
// import store from "./Redux/Store/Store.jsx";

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <TimerProvider>
            <App />
          </TimerProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
// let persistor = persistStore(store);
