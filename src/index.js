import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'typeface-montserrat'; // Import the Montserrat font
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

