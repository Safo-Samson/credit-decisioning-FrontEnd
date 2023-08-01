import React, {useState} from "react";
import lloydsLogo from '../assets/lloydsLogo.jpeg'
import './LoginForm.css';
import { useNavigate } from "react-router-dom";


function LoginForm(){

    const [advisorID, setID] = useState('');
    const [password, setPass] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

        if (advisorID.trim() === '' || password.trim() === '') {
            setError('Please fill out all the fields.');
        } else {
            setError('');
            navigate("/AppUI");
          }

    }


    return (
        <>
        
        <div className="auth-form-container" >
            <div className="logo-header">
            <img className="logo" src={lloydsLogo} alt="Logo" />
            <h1 className="header"> LLOYDS BANK  </h1>
            <form className = 'login-form' onSubmit = {handleSubmit}noValidate>
                <h2 className="login-text">Login</h2>
                <div className="input-row">
                <label htmlFor="AdvisorID">Advisor ID</label>
                <input value={advisorID} onChange={(e)=>setID(e.target.value)}type="advisorID"placeholder="" id= "AdvisorID" name="AdvisorID"required/>
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e)=>setPass(e.target.value)}type="password" placeholder="" id= "password" name="password"required/>
                </div>
                <button>Login </button>
            </form>
            </div>
        </div>
        {error && <p className="error-message">{error}</p>}
        </>
        
    )

}

export default LoginForm