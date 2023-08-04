import "./CusApplication.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCreditCard,
	faUser,
	faCar,
	faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const CusApplication = (props) => {
	let loanIcon;

	if (props.loanType === "Credit Card") {
		loanIcon = <FontAwesomeIcon icon={faCreditCard} />;
	} else if (props.loanType === "Personal Loan") {
		loanIcon = <FontAwesomeIcon icon={faUser} />;
	} else if (props.loanType === "Mortgage") {
		loanIcon = <FontAwesomeIcon icon={faHouse} />;
	} else if (props.loanType === "Car Loan") {
		loanIcon = <FontAwesomeIcon icon={faCar} />;
	}

	const navigate = useNavigate();

	const handleClick = () => {
    navigate("/ReviewInformation", {
      state: {
        // firstName: props.name, name not needed because of bias
        loanType: props.loanType,
        AccountNo: props.AccountNo,
        dateApplied: props.dateApplied,
        amount: props.amount,
        creditScore: props.creditScore,
        birthDate: props.birthDate,
      },
    });
  };

  return (
    <div className="customer-item" onClick={handleClick}>
      <div className="icon-type">{loanIcon}</div>

      {/* <div className="details-page-name "> {props.name}</div> */}
      <div className="details-page">
        <b>Account No:</b> <br></br>
        {props.AccountNo}
      </div>

      <div className="details-page-extended">
        <b>Date Applied:</b>
        <br></br>
        {props.dateApplied.toLocaleString()}
      </div>

      <div className="details-page">
        <b>Amount: </b> <br></br>£{props.amount}
      </div>

      <div className="details-page">
        <b>Loan Type:</b> <br></br>
        {props.loanType}
      </div>
    </div>
  );
};

export default CusApplication;
