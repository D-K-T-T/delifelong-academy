


// import React from "react";
// import ReactDOM from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import "./styles.css";

// import App from "./app";  // Note: Capital A in App
// import { BrowserRouter } from "react-router-dom";

// // Immediate console log
// console.log('Index.js is executing immediately');

// // Function to initialize React app
// function initializeApp() {
//     console.log('Initializing React app');
    
//     const rootElement = document.getElementById("root");
//     if (!rootElement) {
//         console.error('Root element not found!');
//         return;
//     }
    
//     console.log('Root element found:', rootElement);
    
//     const root = ReactDOM.createRoot(rootElement);
//     console.log('React root created');
    
//     root.render(
     
//             <BrowserRouter>
//                 <App />
//             </BrowserRouter>
     
//     );
    
//     console.log('Initial render called');
// }

// // Wait for DOM to be ready
// if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', initializeApp);
//     console.log('Waiting for DOM to load');
// } else {
//     initializeApp();
//     console.log('DOM already loaded');
// }
//// filepath: /home/deshawn/django-apps/django_lms/lms_frontend/src/index.js
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./app";
// import { AuthProvider } from "./contexts/AuthContext";

// ReactDOM.render(
//     <AuthProvider>
//         <App />
//     </AuthProvider>,
//     document.getElementById("root")
// );
//// filepath: /home/deshawn/django-apps/django_lms/lms_frontend/src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app";  // Ensure your App file is named correctly (capital A)
import { AuthProvider } from "./contexts/AuthContext";

// Optionally wrap in StrictMode for development to catch side-effects
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
    <BrowserRouter>
        <AuthProvider>
                <App />
        </AuthProvider>
    </BrowserRouter>
   
);