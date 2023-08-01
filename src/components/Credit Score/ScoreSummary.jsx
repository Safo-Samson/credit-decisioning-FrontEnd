import "./ScoreSummary.css";
import { useState } from "react";
import Popup from "../PopUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
const ScoreSummary = (props) => {
	let loanDecision = "Rejected"; // Assuming "Rejected" or "accepted" based on your logic
	const [summaryOpen, setSummaryOpen] = useState(false);
	const toggleSummaryPopup = () => {
		setSummaryOpen(!summaryOpen);
	};

	return (
		<>
			<div
				className={`summary-display-container ${
					loanDecision === "Rejected" ? "rejected" : "Accepted"
				}`}
			>
				<div className="loan-decision">{loanDecision}</div>
				<button className="summary-button" onClick={toggleSummaryPopup}>View Summary</button>
				{summaryOpen && (
						<Popup
							content={
								<>
									<b>Summary</b>
									<div className="explanation">
										<p>Main factors impacting credit score: </p>
									<div className="negatives">
										<FontAwesomeIcon icon={faExclamation} style ={{width: "70px", height: "70px", border:"5px solid", 'border-radius': "40px" }} />
										<ul>
											<li>Electricity bill payment past due </li>
											<li>Moved 3 times the past year</li>
										</ul>
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
