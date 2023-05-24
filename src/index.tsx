import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// a '!' é a garantia que o 'document.getElementById' irá retornar algo que não 'void'
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);