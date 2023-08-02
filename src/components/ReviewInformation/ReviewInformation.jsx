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
               
			},
		});
	};

	const location = useLocation();

	const [loanType, setType] = useState(location.state?.loanType || "undefined");

	const [loanAmount, setAmount] = useState(
		location.state?.amount || "undefined",
	);
	const [dateApplied, setValue] = useState(location.state?.dateApplied || "undefined");

	const [AccountNo, setAccount] = useState(location.state?.AccountNo || "none");
	const [creditScore, setScore] = useState(location.state?.creditScore);

    const [birthDate, setBirth] = useState(location.state?.birthDate);

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
								<label htmlFor="dateApplied"> dateApplied Applied </label>
								<input
									value={dateApplied}
									onChange={(e) => setValue(e.target.value)}
									type="date"
									placeholder=""
									id="dateApplied"
									name="dateApplied"
								/>
							</div>
						</div>
						<button className="closeBTN">Close</button>
						<button className="calculateBTN" onClick={handleClick}>
							Calculate Score
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ReviewInformation;
