import Apex from "./Apex";
import ApexCircle from "./ApexCircle";
import "./CreditScoreResult.css";
import ScoreSummary from "./ScoreSummary";
import { useState } from "react";
import Popup from "../PopUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import RejectedUI from "../WaitingCustomersUI/RejectedUI";

const CreditScoreResult = ({ creditScore, account }) => {
  const [acceptOpen, setAcceptOpen] = useState(false);
  const [rejectOpen, setRejectOpen] = useState(false);
  const [comments, setComments] = useState("");
  const navigate = useNavigate();

  const toggleAcceptPopup = (props) => {
    if (!rejectOpen) {
      setAcceptOpen(!acceptOpen);
    }

    //
  };

  const toggleRejectPopUp = () => {
    if (!acceptOpen) {
      setRejectOpen(!rejectOpen);
    }
  };

  // update status of customer after acepting or rejecting
  async function sendPut(num, user_id) {
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
    ); // Handle the response here if needed

    console.log(response);
  }

  // handling the accept button with update to waiting queue
  function accept(account) {
    const num = 1;
    sendPut(num, account + "");
  }

  // handling the reject button with update to rejected queue
  function rejected(account) {
    const num = 2;
    sendPut(num, account + ""); // send the account number to the sendPut function
    navigate("/AppUI");
    <RejectedUI customers={customers} />;
  }

  function waiting(account) {
    const num = 0;
    sendPut(num, account + "");
    navigate("/AppUI");
  }

  // handling the reject button
  const handleRejectConfirmation = () => {
    rejected(account);
  };

  return (
    <>
      <div className="credit-container">
        <div className="credit-remaining-content">
          <div className="progress-containers">
            <Apex progress={creditScore || 200} />
            <ApexCircle progress={42} />
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
                  <b>Accepted!</b>
                  <div className="gold-icon">
                    <FontAwesomeIcon icon={faCoins} />
                  </div>
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
                  <b>Reject</b>
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
