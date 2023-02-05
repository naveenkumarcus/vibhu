import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import setupAxiosInterceptors from "./service/interceptor";
setupAxiosInterceptors(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
