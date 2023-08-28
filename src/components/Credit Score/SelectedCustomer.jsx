import "./SelectedCustomer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const SelectedCustomer = (props) => {
  const navigate = useNavigate();
  const formatMoney = (amount) => {
    return parseFloat(amount)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };
  const handleBack = (e) => {
    e.preventDefault();

    navigate("/ReviewInformation", {
      state: {
        // loanType: loanType,
        AccountNo: props.account,
        dateApplied: props.date,
        amount: props.loanAmount,
        loanType: props.loanType,
        birthDate: props.birthDate,
        creditScore: props.creditScore,
        affordability: props.affordability,
        defaults: props.defaults,
        residentialStatus: props.residentialStatus,
        employmentStatus: props.employmentStatus,
        income: props.income,
        dependents: props.dependents,
        loanTerm: props.loanTerm,
        loyaltyDays: props.loyaltyDays,
      },
    });
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "20px",
          borderRight: "1px solid black",
          marginRight: "50px",
        }}>
        <div className="deets-icon">
          <FontAwesomeIcon icon={faIdBadge} />
        </div>

        <div className="text-container in-text">
          <b>Account No.</b>
          <br></br>
          {props.account}
          <br></br>
          <div className="text-line "></div>
        </div>
        <div className="text-container in-text">
          <b>Loan Amount</b>
          <br></br>£{formatMoney(props.loanAmount)}
          <br></br>
          <div className="text-line "></div>
        </div>
        <div className="text-container in-text">
          <b>Date Applied</b>
          <br></br>
          {props.date.toLocaleString()}
          <br></br>
          <div className="text-line "></div>
        </div>
        <button className="back-button" onClick={handleBack}>
          Back
        </button>
      </div>
    </>
  );
};

export default SelectedCustomer;
