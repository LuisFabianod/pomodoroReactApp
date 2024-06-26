import React from 'react';
import { createRoot } from 'react-dom/client'; 
import { Home } from './templates/home';


const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
