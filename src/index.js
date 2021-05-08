import React from "react";
import ReactDOM from "react-dom";
import "styles.scss";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <ChakraProvider>
    <Router>
      <App />
    </Router>
  </ChakraProvider>,
  document.getElementById("root")
);
