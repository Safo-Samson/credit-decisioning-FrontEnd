import { useState } from "react";

function ReviewInformation(){
    const [firstName, setFirst] = useState('');
    const[lastName, setLast] = useState('');
    const[ loanType, setType] = useState('');
    const [loanAmount, setAmount] = useState('');
    const [ accountNumber , setNumber] = useState('');
    const[ dateApplied, setDate] = useState('');

    return(
        <>
        <h1 className="header-text"> Review Details</h1>
        
        
        
        </>
    )
}