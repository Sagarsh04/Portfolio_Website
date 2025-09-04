import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

// Register Meshopt decoder for GLTFLoader (used internally by drei/useGLTF)
import { MeshoptDecoder } from "three-stdlib";
// R3F/drei GLTFLoader picks up MeshoptDecoder if present globally
// eslint-disable-next-line no-unused-expressions
MeshoptDecoder && (window.MeshoptDecoder = MeshoptDecoder);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
