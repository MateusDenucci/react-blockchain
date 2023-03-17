import React from "react";
import ReactDom from "react-dom/client";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./index.css";
import App from "./App";

const rootEl = document.getElementById("root");

const root = ReactDom.createRoot(rootEl);

root.render(<App />);
