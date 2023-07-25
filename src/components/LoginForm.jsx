import React, {useState} from "react";
import lloydsLogo from '../assets/lloydsLogo.jpeg'
import './LoginForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function LoginForm(){

    const [advisorID, setID] = useState('');
    const [password, setPass] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(advisorID);
        console.log(password);
    }


    return (
        <>
        
        <div className="auth-form-container">
            <img className="logo" src={lloydsLogo} alt="Logo" />
            <h1 className="header"> LLOYDS BANK  </h1>
            <form className = 'login-form' onSubmit = {handleSubmit}>
                <h2 className="login-text">Login</h2>
                <div className="input-row">
                <label htmlFor="AdvisorID">Advisor ID</label>
                <input value={advisorID} onChange={(e)=>setID(e.target.value)}type="advisorID"placeholder="" id= "AdvisorID" name="AdvisorID"/>
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e)=>setPass(e.target.value)}type="password" placeholder="" id= "password" name="password"/>
                </div>
                <button>Login </button>
            </form>
        </div>
        </>
        
    )

}

export default LoginForm