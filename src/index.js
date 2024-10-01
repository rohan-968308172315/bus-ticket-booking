import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global CSS
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import 'react-toastify/dist/ReactToastify.css';

// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register(`${process.env.PUBLIC_URL}/service-worker.js`)
      .then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(error => {
        console.log('ServiceWorker registration failed: ', error);
      });
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
