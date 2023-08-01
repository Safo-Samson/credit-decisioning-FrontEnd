import "./ScoreSummary.css";

const ScoreSummary = (props) => {
	let loanDecision = "Rejected"; // Assuming "Rejected" or "accepted" based on your logic

	return (
		<>
			<div
				className={`summary-display-container ${
					loanDecision === "Rejected" ? "rejected" : "Accepted"
				}`}
			>
				<div className="loan-decision">{loanDecision}</div>
				<button className="summary-button">View Summary</button>
			</div>
		</>
	);
};

export default ScoreSummary;
