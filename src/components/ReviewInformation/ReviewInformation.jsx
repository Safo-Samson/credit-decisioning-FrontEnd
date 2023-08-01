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
				firstName: firstName,
				lastName: lastName,
				loanType: loanType,
				AccountNo: AccountNo,
				dateApplied: date,
				creditScore: creditScore,
			},
		});
	};

	const location = useLocation();

	const [firstName, setFirst] = useState(
		location.state?.firstName || "undefined",
	);
	const [lastName, setLast] = useState(
		location.state?.firstName || "undefined",
	);
	const [loanType, setType] = useState(location.state?.loanType || "undefined");

	const [loanAmount, setAmount] = useState(
		location.state?.amount || "undefined",
	);
	const [date, setValue] = useState(location.state?.dateApplied || "undefined");

	const [AccountNo, setAccount] = useState(location.state?.AccountNo || "none");
	const [creditScore, setScore] = useState(location.state?.creditScore);

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
							<div className="firstName">
								<label htmlFor="firstName"> First Name</label>
								<input
									value={firstName}
									onChange={(e) => setFirst(e.target.value)}
									type="firstName"
									placeholder=""
									id="firstName"
									name="firstName"
								/>
							</div>
							<div className="lastName">
								<label htmlFor="lastName"> Last Name</label>
								<input
									value={lastName}
									onChange={(e) => setLast(e.target.value)}
									type="lastName"
									placeholder=""
									id="lastName"
									name="lastName"
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
								<label htmlFor="date"> Date Applied </label>
								<input
									value={date}
									onChange={(e) => setValue(e.target.value)}
									type="date"
									placeholder=""
									id="date"
									name="date"
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
