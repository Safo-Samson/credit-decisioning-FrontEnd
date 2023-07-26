import "./CusApplication.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCreditCard,
	faUser,
	faCar,
	faHouse,
} from "@fortawesome/free-solid-svg-icons";

const CusApplication = ({ loanType, AccountNo, dateApplied, amount, name }) => {
	let loanIcon;
	if (loanType === "Credit Card") {
		loanIcon = <FontAwesomeIcon icon={faCreditCard} />;
	} else if (loanType === "Personal Loan") {
		loanIcon = <FontAwesomeIcon icon={faUser} />;
	} else if (loanType === "Mortgage") {
		loanIcon = <FontAwesomeIcon icon={faHouse} />;
	} else if (loanType === "Car Loan") {
		loanIcon = <FontAwesomeIcon icon={faCar} />;
	}

	return (
		<div className="customer-item">
			<div className="icon-type">{loanIcon}</div>

			<div className="details-page"> {name}</div>
			<div className="details-page">
				<b>Account No:</b> <br></br>
				{AccountNo}
			</div>

			<div className="details-page-extended">
				<b>Date Applied:</b>
				<br></br>
				{dateApplied.toLocaleString()}
			</div>

			<div className="details-page">
				<b>Amount: </b> <br></br>£{amount}
			</div>

			<div className="details-page">
				<h3>{loanType}</h3>
			</div>
		</div>
	);
};

export default CusApplication;
