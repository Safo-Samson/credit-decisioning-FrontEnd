import "./ScoreSummary.css";
import { useState } from "react";
import Popup from "../PopUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation, faCheck } from "@fortawesome/free-solid-svg-icons";
import Insights from "../../assets/SummaryInsights.json";

const ScoreSummary = (props) => {
  let loanDecision = "Accepted"; // Assuming "Rejected" or "accepted" based on your logic
  const [summaryOpen, setSummaryOpen] = useState(false);
  const toggleSummaryPopup = () => {
    setSummaryOpen(!summaryOpen);
  };

  const { positive, negative, negative_suggestions } = Insights;

  return (
    <>
      <div
        className={`summary-display-container ${
          loanDecision === "Rejected" ? "rejected" : "Accepted"
        }`}>
        <div className="loan-decision">{"Model Decision: " + loanDecision}</div>
        <button className="summary-button" onClick={toggleSummaryPopup}>
          View Summary
        </button>
        {summaryOpen && (
          <Popup
            content={
              <>
                <div className="summary-title">
                  <b>Summary</b>
                  <div className="summary-rest">
                    <p>Main factors impacting results: </p>
                  </div>
                  <div className="explanation">
                    {negative.length > 0 ? (
                      <div className="negatives">
                        <FontAwesomeIcon
                          icon={faExclamation}
                          style={{
                            width: "40px",
                            height: "40px",
                            border: "5px solid",
                            borderRadius: "40px",
                          }}
                        />
                        <ul>
                          {negative.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="negatives">
                        <FontAwesomeIcon
                          icon={faExclamation}
                          style={{
                            width: "40px",
                            height: "40px",
                            border: "5px solid",
                            borderRadius: "40px",
                          }}
                        />
                        <ul>
                          <li>Customer has no negative</li>
                        </ul>
                      </div>
                    )}

                    <div className="positives">
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{
                          width: "40px",
                          height: "40px",
                          border: "5px solid",
                          "border-radius": "40px",
                        }}
                      />
                      <ul>
                        {positive.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            }
            handleClose={toggleSummaryPopup}
            type="summary"
          />
        )}
      </div>
    </>
  );
};

export default ScoreSummary;
