import React from "react";
import ReactDOM from "react-dom/client";

import './App.css' // Make sure this line exists
import App from "./App";
import './index.css'; // Ensure this line exists to import global styles
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
