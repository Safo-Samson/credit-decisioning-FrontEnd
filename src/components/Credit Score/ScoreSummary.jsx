import "./ScoreSummary.css";

const ScoreSummary = (props) => {

  let loanDecision = "accepted"; // Assuming "rejected" or "accepted" based on your logic

  return (
    <>
      <div
        className={`summary-display-container ${
          loanDecision === "rejected" ? "rejected" : "accepted"
        }`}>
        <div className="loan-decision">{loanDecision}</div>
        <button className="summary-button">View Summary</button>
      </div>
    </>
  );
};

export default ScoreSummary;
