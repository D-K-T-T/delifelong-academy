// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./styles.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.bundle.min';

// import App from "./app";
// import { BrowserRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// console.log('Root rendered');  
// 



import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./styles.css";

import App from "./app";  // Note: Capital A in App
import { BrowserRouter } from "react-router-dom";

// Immediate console log
console.log('Index.js is executing immediately');

// Function to initialize React app
function initializeApp() {
    console.log('Initializing React app');
    
    const rootElement = document.getElementById("root");
    if (!rootElement) {
        console.error('Root element not found!');
        return;
    }
    
    console.log('Root element found:', rootElement);
    
    const root = ReactDOM.createRoot(rootElement);
    console.log('React root created');
    
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    );
    
    console.log('Initial render called');
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
    console.log('Waiting for DOM to load');
} else {
    initializeApp();
    console.log('DOM already loaded');
}