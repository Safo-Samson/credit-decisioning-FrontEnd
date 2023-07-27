import { useState } from "react";
import './ReviewInformation.css'
import VerticalContainer from "../WaitingCustomersUI/VerticalContainer";
function ReviewInformation(props){
    const [firstName, setFirst ]= useState('');
    const [lastName, setLast ]= useState('');
    const [loanType, setType] = useState('');
    const [loanAmount, setAmount] = useState('');
    const [date, setValue] = useState('');
    


    return(


        <div className="review-main-container">
        
        <div className="review-information-container">
            <h4 className="Review-text">Review Details</h4>
            
            <form className="form-container">
                
                <div className="firstRow">
                <div className="firstName">
                <label htmlFor="firstName"> First Name</label>
                <input value={firstName} onChange={(e)=>setFirst(e.target.value)}type="firstName"placeholder="" id= "firstName" name="firstName"/>
                </div>
                <div className="lastName">
                <label htmlFor="lastName"> Last Name</label>
                <input value={lastName} onChange={(e)=>setLast(e.target.value)}type="lastName"placeholder="" id= "lastName" name="lastName"/>
                </div>
                <div className="loanType">
                <label htmlFor="loanType"> Loan Type</label>
                <input value={loanType} onChange={(e)=>setType(e.target.value)}type="loanType"placeholder="" id= "loanType" name="loanType"/>
                </div>
                <div className="loanAmount">
                <label htmlFor="loanAmount"> Loan Amount</label>
                <input value={loanAmount} onChange={(e)=>setAmount(e.target.value)}type="loanAmount"placeholder="" id= "loanAmount" name="loanAmount"/>
                </div>
                </div>
                < div className="secondRow">
                <div className="date">
                <label htmlFor="date"> Date Applied </label>
                <input value={date} onChange={(e)=>setValue(e.target.value)}type="date"placeholder="" id= "date" name="date"/>
                </div>
                </div>
                <button className="closeBTN">Close</button>
                <button className="calculateBTN">Calculate Score</button>
            </form>



        </div>
        </div>
    )
}

export default ReviewInformation