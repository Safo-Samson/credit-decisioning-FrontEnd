import React from "react";
import ReactDOM from "react-dom/client";


import App from "./App.jsx";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);

{
	/* <React.StrictMode>...</React.StrictMode>: This is a wrapper provided by React for development mode. 
It activates additional checks and warnings to help you write better code.
 It is not displayed in the final production build */
}
