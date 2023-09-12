import React from "react";
import ReactDOM from "react-dom/client";
import "aos/dist/aos.css";
import "antd/dist/reset.css";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import App from "./App";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>
);
