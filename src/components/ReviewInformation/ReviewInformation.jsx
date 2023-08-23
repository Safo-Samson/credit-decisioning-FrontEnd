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
        loanType: loanType,
        AccountNo: AccountNo,
        dateApplied: dateApplied,
        creditScore: creditScore,
        affordability: affordability,
        loanAmount: loanAmount,
        birthDate: birthDate,
        defaults: defaults,
        residentialStatus: residentialStatus,
        employmentStatus: employmentStatus,
        income: income,
        dependents: dependents,
        loanTerm: loanTerm,
        loyaltyDays: loyaltyDays,
        // we need send the following to the next page - credit score and affordability
      },
    });
  };
  const handleClose = (e) => {
    e.preventDefault();
    navigate("/AppUI");
  };

  const location = useLocation();

  const [loanType, setType] = useState(location.state?.loanType || "undefined");
  const [loanAmount, setAmount] = useState(
    location.state?.amount || "undefined"
  );
  const [dateApplied, setValue] = useState(
    location.state?.dateApplied || "undefined"
  );
  const [AccountNo, setAccount] = useState(location.state?.AccountNo || "none");
  const [creditScore, setScore] = useState(location.state?.creditScore);
  const [affordability, setAffordability] = useState(
    Math.floor(location.state?.affordability)
  );
  const [birthDate, setBirth] = useState(location.state?.birthDate);
  const [residentialStatus, setResidential] = useState(
    location.state?.residentialStatus
  );
  const [employmentStatus, setEmployment] = useState(
    location.state?.employmentStatus
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

  const formatLoanTerm = (value) => {
    return value !== "" ? `${value} month${value !== "1" ? "s" : ""}` : "";
  };

  return (
    <div className="review-main-container">
      <VerticalContainer customers={props.customers} />

      <div className="test-container">
      <h4 className="Review-text">Review Details</h4>
        <div className="review-information-container">
          

          <form className="form-container">
            <div className="prof-icon">
              <FontAwesomeIcon icon={faIdBadge} />
            </div>

            <div className="loanInfo-Container">
                <div className="loanInfo-left">
                <div className="AccountNo">
                    <label htmlFor="AccountNo"> Account Number:</label>
                    <div className="fields-loan">{AccountNo}</div>
                </div>
                <div className="dateApplied">
                  <label htmlFor="dateApplied"> Date Applied: </label>
                  <div className="fields-loan">{dateApplied}</div>
                </div>
                </div>

                <div className="loanInfo-right">

                <div className="loanType">
                  <label htmlFor="loanType"> Loan Type:</label>
                  <div className="fields-loan">{loanType}</div>

                </div>
                <div className="loanAmount">
                  <label htmlFor="loanAmount"> Loan Amount:</label>
                  <div className="fields-loan">£{loanAmount}</div>

                </div>

                <div className="loanTerm">
                  <label htmlFor="loanTerm">Loan Term:</label>
                  <div className="fields-loan">{loanTerm} Months</div>

                </div>
                </div>
            </div>

            <div className="personal-financial">

                <div className="personal-info">
                    <div className="personalInfoTxt">
                        <p>CUSTOMER INFORMATION</p>
                    </div>

                    <div className="birthDate">
                        <label htmlFor="birthDate"> Birth date: </label>
                        <div className="fields-loan">  {birthDate}</div>
                    </div>

                    <div className="loyaltyDays">
                        <label htmlFor="loyaltyDays"> Loyalty Days:</label>
                        <div className="fields-loan">{loyaltyDays} </div>
                    </div>
                    

                </div>
                <div className="financial-info">
                    <div className="financialInfoTxt">
                        <p>FINANCIAL INFORMATION</p>
                    </div>
                    <div className="employmentStatus">
                        <label htmlFor="employmentStatus"> Employment Status:</label>
                        <div className="fields-loan">{employmentStatus} </div>
                   </div>
                   <div className="defaults">
                      <label htmlFor="defaults"> Defaults:</label>
                      <div className="fields-loan">{defaults} </div>
                  </div>
                  <div className="income">
                       <label htmlFor="income"> Income:</label>
                       <div className="fields-loan">{income} </div>
                  </div>
                  <div className="dependents">
                    <label htmlFor="dependents"> Dependents:</label>
                    <div className="fields-loan">{dependents} </div>
                  </div>

                <div className="residentialStatus">
                  <label htmlFor="residentialStatus"> Residential Status:</label>
                  <div className="fields-loan">{residentialStatus} </div>
                </div> 

            </div>
        </div>


          </form>
          <div className="reviewInformation-buttons">
              <button className="closeBTN" onClick={handleClose}>
                Close
              </button>
              <button className="calculateBTN" onClick={handleClick}>
                Show Results
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewInformation;
