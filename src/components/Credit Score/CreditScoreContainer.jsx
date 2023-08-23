import "./CreditScoreContainer.css";
import VerticalContainer from "../WaitingCustomersUI/VerticalContainer";
import CreditScoreResult from "./CreditScoreResult";
import SelectedCustomer from "./SelectedCustomer";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function CreditScoreContainer(props) {
  const location = useLocation();
  const [date, setValue] = useState(location.state?.dateApplied || "undefined");
  const [account, setAccount] = useState(location.state?.AccountNo);
  const [creditScore, setScore] = useState(location.state?.creditScore);
  const [affordability, setAffordability] = useState(
    location.state?.affordability || 77.2
  );
  const [loanAmount, setAmount] = useState(location.state?.loanAmount);
  const [birthDate, setBirth] = useState(location.state?.birthDate);
  const [loanType, setType] = useState(location.state?.loanType || "undefined");
  const [residentialStatus, setResidential] = useState(
    location.state?.residentialStatus
  );
  const [employmentStatus, setEmployment] = useState(
    location.state?.employmentStatus || "undefined"
  );
  const [dependents, setDependents] = useState(
    location.state?.dependents || "3"
  );
  const [income, setIncome] = useState(location.state?.income || "200000");
  const [defaults, setDefaults] = useState(location.state?.defaults);
  const [loyaltyDays, setLoyalty] = useState(
    location.state?.loyaltyDays || "729"
  );
  const [loanTerm, setTerm] = useState(location.state?.loanTerm || "3");

  return (
    <div className="gen-container">
      <VerticalContainer customers={props.customers} />

      <div className="gen-remaining-content">
        <h4 className="score-header">Review Details</h4>
        <div className="credit-result-display">
          <SelectedCustomer
            date={date}
            account={account}
            loanAmount={loanAmount}
            loanType={loanType}
            birthDate={birthDate}
            creditScore={creditScore} // just to send it to ReviewInformation when back it clicked
            residentialStatus={residentialStatus}
            employmentStatus={employmentStatus}
            dependents={dependents}
            income={income}
            defaults={defaults}
            loyaltyDays={loyaltyDays}
            loanTerm={loanTerm}
            affordability={affordability}
          />
          <CreditScoreResult
            creditScore={creditScore}
            account={account}
            affordability={affordability}
          />
        </div>
      </div>
    </div>
  );
}

export default CreditScoreContainer;
