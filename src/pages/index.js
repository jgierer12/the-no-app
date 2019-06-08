import * as React from "react";

import { ClipContextProvider } from "../contexts/clip";
import { App } from "../components/app";

// eslint-disable-next-line healthier/no-default-export
export default () => (
  <ClipContextProvider>
    <App />
  </ClipContextProvider>
);
