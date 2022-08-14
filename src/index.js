import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import storageUtils from "./utils/storageUtils";
import memoryUtils from "../src/utils/memoryUtils"

import App from "./App";

const user = storageUtils.getUser();// read user info from localstrage
memoryUtils.user=user // put the read info into RAM

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
