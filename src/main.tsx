import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CountryProvider, ThemeProvider } from './contexts/Providers';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <CountryProvider>
        <App />
      </CountryProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
