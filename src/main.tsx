import React from "react";
import {createRoot} from "react-dom/client";
import Karlstejn from "./Karlstejn";
import Privacy from "./Privacy";
import "./styles.css";
const privacy=window.location.pathname.endsWith("ochrana-soukromi.html");
createRoot(document.getElementById("root")!).render(<React.StrictMode>{privacy?<Privacy/>:<Karlstejn/>}</React.StrictMode>);
