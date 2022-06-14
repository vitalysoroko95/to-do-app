import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import Layout from "./comonents/Home/Layout/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);
