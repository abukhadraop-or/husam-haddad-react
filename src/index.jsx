import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GlobalStyle from 'GlobalStyles';
import App from './App';
import { UrlContextProvider } from './componenets/store/url-context';

ReactDOM.render(
  <UrlContextProvider>
    <GlobalStyle />
    <App />
  </UrlContextProvider>,
  document.getElementById('root')
);
