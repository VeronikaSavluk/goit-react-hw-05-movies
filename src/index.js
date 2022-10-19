import React from 'react';
import { GlobalStyle, theme } from './styles';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'modern-normalize';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/goit-react-hw-05-movies'>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
