import { useState } from "react";
import "./ReviewInformation.css";
import VerticalContainer from "../WaitingCustomersUI/VerticalContainer";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
import income_statement from "./income_statement.pdf"


function ReviewInformation(props) {
    const HARDCODED_DOCUMENT = income_statement;
	const navigate = useNavigate();
    const [uploadedDocuments, setUploadedDocuments] = useState([HARDCODED_DOCUMENT]);

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
               
			},
		});
	};
    const handleClose = (e) =>{
        e.preventDefault();
        navigate('/AppUI')
    }

	const location = useLocation();

	const [loanType, setType] = useState(location.state?.loanType || "undefined");

	const [loanAmount, setAmount] = useState(
		location.state?.amount || "undefined",
	);
	const [dateApplied, setValue] = useState(location.state?.dateApplied || "undefined");

	const [AccountNo, setAccount] = useState(location.state?.AccountNo || "none");
	const [creditScore, setScore] = useState(location.state?.creditScore);

    const [birthDate, setBirth] = useState(location.state?.birthDate);
    const[residentialStatus, setResidential] = useState("");
    const[employmentStatus, setEmployment] = useState("");
    const[dependents, setDependents] = useState("");
    const [income, setIncome] = useState("");
    const[defaults, setDefaults] = useState("");
    const[loyaltyDays, setLoyalty] = useState("");

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

						<div className="firstRow">
							<div className="AccountNo">
								<label htmlFor="AccountNo"> Account Number</label>
								<input
									value={AccountNo}
									onChange={(e) => setAccount(e.target.value)}
									type="AccountNo"
									placeholder=""
									id="AccountNo"
									name="AccountNo"
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
								/>
							</div>
						</div>

						<div className="secondRow">
							<div className="dateApplied">
								<label htmlFor="dateApplied"> Date Applied </label>
								<input
									value={dateApplied}
									onChange={(e) => setValue(e.target.value)}
									type="date"
									placeholder=""
									id="dateApplied"
									name="dateApplied"
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
                                />
                            </div>
                            <div className="employmentStatus">
                                <label htmlFor="employmentStatus"> Employment Status</label>
                                <input
                                    value={employmentStatus}
                                    onChange={(e) => setEmployment(e.target.value)}
                                    type = "employmentStatus"
                                    placeholder=""
                                    id="employmentStatus"
                                    name="employmentStatus"
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
                                />
                            </div>
                            
						</div>
                        <div className="thirdRow">
                            <div className="income">
                                <label htmlFor="income"> Income</label>
                                <input
                                    value={income}
                                    onChange={(e) => setIncome(e.target.value)}
                                    type = "income"
                                    placeholder=""
                                    id="income"
                                    name="income"
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
                                />

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
