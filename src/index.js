import React from 'react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client'; // use this instead
import App from './app.jsx';

import './app.css';

// NEW create root syntax
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);