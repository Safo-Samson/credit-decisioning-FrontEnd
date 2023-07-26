import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "react-router";


import App from "./App.jsx";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
);

{
	/* <React.StrictMode>...</React.StrictMode>: This is a wrapper provided by React for development mode. 
It activates additional checks and warnings to help you write better code.
 It is not displayed in the final production build */
}
