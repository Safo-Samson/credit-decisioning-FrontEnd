import Apex from "./Apex";
import ApexCircle from "./ApexCircle";
import "./CreditScoreResult.css";
import ScoreSummary from "./ScoreSummary";
import { useState, useEffect } from "react";
import Popup from "../PopUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const CreditScoreResult = ({
  creditScore,
  account,
  customers,
  affordability,
}) => {
  const [acceptOpen, setAcceptOpen] = useState(false);
  const [rejectOpen, setRejectOpen] = useState(false);
  const [comments, setComments] = useState("");

  const navigate = useNavigate();

  const toggleAcceptPopup = () => {
    if (!rejectOpen) {
      setAcceptOpen(!acceptOpen);
    }
  };

  const toggleRejectPopUp = () => {
    if (!acceptOpen) {
      setRejectOpen(!rejectOpen);
    }
  };

  // update status of customer after acepting or rejecting
  async function sendUpdate(num, user_id) {
    const data = {
      status: num, // status 0 = waiting, 1 = accepted, 2 = rejected
    };
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(
      `http://77.91.124.124:5000/update-status/${user_id}`,
      requestOptions
    );

    const responseData = await response.json();
    console.log(responseData);

    // If it's accepted, navigate to the AcceptedUI page passing the updated customer as a prop
    if (num === 1) {
      navigate("/AcceptedUI", { state: { customer: responseData } });
    } else if (num === 2) {
      // If it's rejected, navigate to the RejectedUI page passing the updated customer as a prop
      navigate("/RejectedUI", { state: { customer: responseData } });
      // }
    }
  }

  async function accept(account) {
    const num = 1;
    await sendUpdate(num, account + ""); // send the account number to the sendUpdate function
  }

  // handling the reject button with update to rejected queue
  async function rejected(account) {
    const num = 2;
    await sendUpdate(num, account + ""); // send the account number to the sendUpdate function
  }

  function waiting(account) {
    const num = 0;
    sendUpdate(num, account + "");
    navigate("/AppUI");
  }

  // handling the reject button
  const handleRejectConfirmation = () => {
    rejected(account);
  };

  // handling the accept button
  const handleAcceptConfirmation = () => {
    accept(account);
  };

  return (
    <>
      <div className="credit-container">
        <div className="credit-remaining-content">
          <div className="progress-containers">
            {/* <Apex progress={creditScore || 200} /> */}
            <Apex progress={731} />
            <ApexCircle progress={affordability || 77.2} />
            <ScoreSummary />
          </div>

          <button
            className={`confirm-accept ${rejectOpen ? "disabled" : ""}`}
            onClick={toggleAcceptPopup}>
            Accept
          </button>
          {acceptOpen && (
            <Popup
              content={
                <>
                  <b>Do you want to accept the loan?</b>
                  <div className="gold-icon">
                    {/* <FontAwesomeIcon icon={faCoins} /> */}
                  </div>
                  <button
                    className="confirmAcceptBtn"
                    onClick={handleAcceptConfirmation}>
                    Accept
                  </button>
                </>
              }
              handleClose={toggleAcceptPopup}
              type="accepted"
            />
          )}

          <button
            className={`confirm-reject ${acceptOpen ? "disabled" : ""}`}
            onClick={toggleRejectPopUp}
            disabled={acceptOpen}>
            Reject
          </button>

          {rejectOpen && (
            <Popup
              content={
                <>
                  <b>Do you want to reject the loan?</b>
                  <div className="comments">
                    <div className="comments-text">
                      <label htmlFor="comments-text">
                        {" "}
                        Additional Comments (Optional)
                      </label>
                    </div>
                    <div className="comments-input">
                      <input
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        type="comments"
                        placeholder=""
                        id="comments"
                        name="comments"
                      />
                    </div>
                    <button
                      className="confirmRejectBtn"
                      onClick={handleRejectConfirmation}>
                      Reject
                    </button>
                  </div>
                </>
              }
              handleClose={toggleRejectPopUp}
              type="rejected"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CreditScoreResult;
