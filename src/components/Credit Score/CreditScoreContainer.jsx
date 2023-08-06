import "./CreditScoreContainer.css";
import VerticalContainer from "../WaitingCustomersUI/VerticalContainer";
import CreditScoreResult from "./CreditScoreResult";
import SelectedCustomer from "./SelectedCustomer";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function CreditScoreContainer(props) {
  const location = useLocation();

  // const [firstName, setFirst] = useState(location.state?.firstName);
  // const [lastName, setLast] = useState(location.state?.lastName || "undefined");
  const [date, setValue] = useState(location.state?.dateApplied || "undefined");
  const [account, setAccount] = useState(location.state?.AccountNo);
  const [creditScore, setScore] = useState(location.state?.creditScore);
  const [loanAmount, setAmount] = useState(location.state?.loanAmount);
  const [birthDate, setBirth] = useState(location.state?.birthDate);
  const [loanType, setType] = useState(location.state?.loanType || "undefined");

  return (
    <div className="gen-container">
      <VerticalContainer customers={props.customers} />

      <div className="gen-remaining-content">
        <h4 className="score-header">Review Details</h4>
        <div className="credit-result-display">
          <SelectedCustomer
            // firstName={firstName}
            // lastName={lastName}
            date={date}
            account={account}
            loanAmount={loanAmount}
            loanType={loanType}
            birthDate={birthDate}
          />
          <CreditScoreResult creditScore={creditScore} account={account} />
        </div>
      </div>
    </div>
  );
}

export default CreditScoreContainer;
