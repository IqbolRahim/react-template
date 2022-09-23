import "./index.css";
import React from "react";
import router from "router";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} fallbackElement={<>Loading...</>} />
);

reportWebVitals();
