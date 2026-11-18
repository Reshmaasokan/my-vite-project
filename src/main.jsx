import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Apps from "./App";


createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Apps />
    </StrictMode>
);