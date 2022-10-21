import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { CountryContextProvider } from './contexts/CountryContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ThemeContextProvider>
      <CountryContextProvider>
        <BrowserRouter>
          <App /> 
        </BrowserRouter>
      </CountryContextProvider>
    </ThemeContextProvider>
  // </React.StrictMode>
);

