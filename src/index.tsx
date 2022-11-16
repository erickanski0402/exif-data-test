import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App.tsx';

render(
  <div id="index-root">
    <App />
  </div>,
  document.getElementById('root')
);
