import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LoginHeader from './components/LoginHeader.jsx'  // <--- Add this line
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <LoginHeader /> 
  </React.StrictMode>,
)


{/* <React.StrictMode>...</React.StrictMode>: This is a wrapper provided by React for development mode. 
It activates additional checks and warnings to help you write better code.
 It is not displayed in the final production build */}