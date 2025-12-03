import React from "react";
import ReactDOM from "react-dom/client";

// IMPORTANT: Tailwind v4 CSS import FIRST
import "./index.css";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
