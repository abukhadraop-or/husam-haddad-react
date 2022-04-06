import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import GlobalStyle from "GlobalStyles";
import { UrlContextProvider } from "components/store/url-context";
import App from "App";

ReactDOM.render(
  <UrlContextProvider>
    <GlobalStyle />
    <App />
  </UrlContextProvider>,
  document.getElementById("root")
);
