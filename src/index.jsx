import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "components/styles/global-styles";
import { UrlContextProvider } from "components/store/url-context";
import App from "App";

ReactDOM.render(
  <UrlContextProvider>
    <GlobalStyle />
    <App />
  </UrlContextProvider>,
  document.getElementById("root")
);
