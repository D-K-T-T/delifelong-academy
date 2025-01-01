import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

// import Header from "./components/header";
// import Home from "./components/home";
// import Footer from "./components/footer";
import App from "./app";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// const App = () => (
//   <>
//     <Header />
//     <Home />
//     <Footer />
//   </>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
