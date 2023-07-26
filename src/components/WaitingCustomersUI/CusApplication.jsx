import "./CusApplication.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faUser,faCar ,faHouse} from '@fortawesome/free-solid-svg-icons';
import VerticalContainer from "../WaitingCustomersUI/VerticalContainer";

const CusApplication = (props) => {
 let loanIcon;
	if (props.loanType === "Credit Card") {
		loanIcon = <FontAwesomeIcon icon={faCreditCard} />;
	} else if (props.loanType === "Personal Loan") {
		loanIcon = <FontAwesomeIcon icon={faUser} />;
	}
	else if (props.loanType === "Mortgage") { 
		loanIcon = <FontAwesomeIcon icon={faHouse} />;
	}
	else if (props.loanType === "Car Loan") { 
		loanIcon = <FontAwesomeIcon icon={faCar} />;
	}

	return (
		<div className="customer-item">
			<div className="icon-type" >
				{loanIcon}
			</div>

			<div className="details-page"> {props.name}</div>
			<div className="details-page">
				<b>Account No:</b> <br></br>
				{props.AccountNo}
			</div>

			<div className="details-page-extended">
				<b>Date Applied:</b><br></br>
				{props.dateApplied.toLocaleString()}
			</div>

			<div className="details-page">
			<b>Amount:  </b> <br></br>
			£{props.amount}
			</div>

			<div className="details-page">
			<h3>{props.loanType}</h3>
				</div>
			
		</div>
	);
};

export default CusApplication;
