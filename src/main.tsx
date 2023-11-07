import React from "react";
import ReactDOM from "react-dom/client";
import RequireAuth from "./RequireAuth";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RequireAuth />
    </React.StrictMode>
  </Provider>
);
