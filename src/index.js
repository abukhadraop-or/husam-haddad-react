import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UrlContextProvider } from './componenets/store/url-context';


ReactDOM.render(
    <UrlContextProvider>
    <App />
    </UrlContextProvider>
 , document.getElementById('root')
);

