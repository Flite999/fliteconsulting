import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure this is your main component

const root = ReactDOM.createRoot(document.getElementById('root')); // Ensure 'root' matches the id in public/index.html
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
