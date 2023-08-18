import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from 'react-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
// <React.StrictMode>
<BrowserRouter> 
  <App />
</BrowserRouter> 
// </React.StrictMode>,
);
