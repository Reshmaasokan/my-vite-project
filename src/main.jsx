import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Endpoint from "./Service/endPoint";


createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Endpoint />
    </StrictMode>
);