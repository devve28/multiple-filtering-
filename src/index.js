import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; // Ensure App contains the store configuration
import reportWebVitals from "./reportWebVitals";

// Create a root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
