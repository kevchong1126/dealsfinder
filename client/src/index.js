import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ScrollTop from './util/ScrollTop';
import './index.scss'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    <ScrollTop />
  </BrowserRouter>
);

