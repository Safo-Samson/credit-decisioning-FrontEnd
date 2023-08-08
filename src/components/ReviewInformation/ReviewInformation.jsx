import { useState } from "react";
import "./ReviewInformation.css";
import VerticalContainer from "../WaitingCustomersUI/VerticalContainer";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";



function ReviewInformation(props) {
    
	const navigate = useNavigate();
     

	const handleClick = (e) => {
		e.preventDefault();
		navigate("/CreditScore", {
      state: {
        // firstName: firstName,
        // lastName: lastName,
        loanType: loanType,
        AccountNo: AccountNo,
        dateApplied: dateApplied,
        creditScore: creditScore,
        loanAmount: loanAmount,
        birthDate: birthDate,
        // we need send the following to the next page - credit score and affordability
      },
    });
	};
    const handleClose = (e) =>{
        e.preventDefault();
        navigate('/AppUI')
    }

	const location = useLocation();

	const [loanType, setType] = useState(location.state?.loanType || "undefined");
	const [loanAmount, setAmount] = useState(location.state?.amount || "undefined");
	const [dateApplied, setValue] = useState(location.state?.dateApplied || "undefined");
	const [AccountNo, setAccount] = useState(location.state?.AccountNo || "none");
	const [creditScore, setScore] = useState(location.state?.creditScore);
    const [birthDate, setBirth] = useState(location.state?.birthDate);
    const[residentialStatus, setResidential] = useState(location.state?.residentialStatus);
    const[employmentStatus, setEmployment] = useState(location.state?.employmentStatus);
    const[dependents, setDependents] = useState(location.state?.dependents || '3');
    const [income, setIncome] = useState(location.state?.income || '200000');
    const[defaults, setDefaults] = useState(location.state?.defaults);
    const[loyaltyDays, setLoyalty] = useState(location.state?.loyaltyDays || '729');
    const[loanTerm, setTerm] = useState(location.state?.loanTerm || '3');

	return (
		<div className="review-main-container">
			<VerticalContainer customers={props.customers} />

			<div className="test-container">
				<div className="review-information-container">
					<h4 className="Review-text">Review Details</h4>

					<form className="form-container">
						<div className="prof-icon">
							<FontAwesomeIcon icon={faIdBadge} />
						</div>



						<div className="personalInfo">
                        <div className="personalInfoTxt">
                                CUSTOMER INFORMATION
                            </div>
                            <div className="personalFields">
							<div className="AccountNo">
								<label htmlFor="AccountNo"> Account Number</label>
								<input
									value={AccountNo}
									onChange={(e) => setAccount(e.target.value)}
									type="AccountNo"
									placeholder=""
									id="AccountNo"
									name="AccountNo"
                                    readOnly
								/>
							</div>

                            <div className="birthDate">
								<label htmlFor="birthDate"> Birth date</label>
								<input
                                
									value={birthDate}
									onChange={(e) => setBirth(e.target.value)}
									type="date"
									placeholder=""
									id="birthDate"
									name="birthDate"
                                    readOnly
								/>
							</div>
                            <div className="loyaltyDays">
                                <label htmlFor="loyaltyDays"> Loyalty Days</label>
                                <input
                                    value={loyaltyDays}
                                    onChange={(e) => setLoyalty(e.target.value)}
                                    type = "loyaltyDays"
                                    placeholder=""
                                    id="loyaltyDays"
                                    name="loyaltyDays"
                                    readOnly
                                />

                            </div>
                            </div>


						</div>

						<div className="loanInfo">
                            <div className="loanInfoTxt">Loan Information</div>
                            <div className="loanFields">
                            <div className="dateApplied">
								<label htmlFor="dateApplied"> Date Applied </label>
								<input
									value={dateApplied}
									onChange={(e) => setValue(e.target.value)}
									type="date"
									placeholder=""
									id="dateApplied"
									name="dateApplied"
                                    readOnly
								/>
							</div>

							<div className="loanType">
								<label htmlFor="loanType"> Loan Type</label>
								<input
									value={loanType}
									onChange={(e) => setType(e.target.value)}
									type="loanType"
									placeholder=""
									id="loanType"
									name="loanType"
                                    readOnly
								/>
							</div>
                            <div className="loanAmount">
								<label htmlFor="loanAmount"> Loan Amount</label>
								<input
									value={loanAmount}
									onChange={(e) => setAmount(e.target.value)}
									type="loanAmount"
									placeholder=""
									id="loanAmount"
									name="loanAmount"
                                    readOnly
								/>
							</div>

                            <div className="loanTerm">
                                <label htmlFor="loanTerm">Loan Term</label>
                                <input
                                    value={loanTerm}
                                    onChange={(e)=> setTerm(e.target.value)}
                                    type="loanTerm"
                                    placeholder="months"
                                    id="loanterm"
                                    name="loanTerm"
                                    readOnly
                                    />
                            </div>
                            </div>


                            
						</div>
                        <div className="financialInfo">
                            <div className="financialInfoTxt">Financial Information</div>
                        <div className="financialFields">

                        <div className="employmentStatus">
                                <label htmlFor="employmentStatus"> Employment Status</label>
                                <input
                                    value={employmentStatus}
                                    onChange={(e) => setEmployment(e.target.value)}
                                    type = "employmentStatus"
                                    placeholder=""
                                    id="employmentStatus"
                                    name="employmentStatus"
                                    readOnly
                                />
                            </div>
                        <div className="defaults">
                                <label htmlFor="defaults"> Defaults</label>
                                <input
                                    value={defaults}
                                    onChange={(e) => setDefaults(e.target.value)}
                                    type = "defaults"
                                    placeholder=""
                                    id="defaults"
                                    name="defaults"
                                    readOnly
                                />

                        </div>
                        <div className="income">
                                <label htmlFor="income"> Income</label>
                                <input
                                    value={income}
                                    onChange={(e) => setIncome(e.target.value)}
                                    type = "income"
                                    placeholder=""
                                    id="income"
                                    name="income"
                                    readOnly
                                />

                            </div>
                        <div className="dependents">
                                <label htmlFor="dependents"> Dependents</label>
                                <input
                                    value={dependents}
                                    onChange={(e) => setDependents(e.target.value)}
                                    type = "dependents"
                                    placeholder=""
                                    id="dependents"
                                    name="dependents"
                                    readOnly
                                />
                            </div>

                            <div className="residentialStatus">
                                <label htmlFor="residentialStatus"> Residential Status</label>
                                <input
                                    value={residentialStatus}
                                    onChange={(e) => setResidential(e.target.value)}
                                    type = "residentialStatus"
                                    placeholder=""
                                    id="residentialStatus"
                                    name="residentialStatus"
                                    readOnly
                                />
                            </div>

                            </div>

                        </div>
						<button className="closeBTN" onClick={handleClose}>Close</button>
						<button className="calculateBTN" onClick={handleClick}>
							Show Results
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ReviewInformation;
