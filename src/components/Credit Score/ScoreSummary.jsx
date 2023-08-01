import "./ScoreSummary.css";
import { useState } from "react";
import Popup from "../PopUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";





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
									<div className="summary-title">

											<b>Summary</b>
										<div className="summary-rest">
											<p>Main factors impacting credit score: </p></div>
											<div className="explanation">
												
												<div className="negatives">
													<FontAwesomeIcon icon={faExclamation} style ={{width: "40px", height: "40px", border:"5px solid", 'border-radius': "40px" }} />
													<ul>
														<li>Electricity bill payment past due </li>
														<li>Moved 3 times the past year</li>
													</ul>
													</div>
												
												<div className="positives">
													<FontAwesomeIcon icon={faCheck} style ={{width: "40px", height: "40px", border:"5px solid", 'border-radius': "40px" }} />
													<ul>
														<li>All debit balances paid off </li>
														<li>Mix of 4 credit cards used</li>
														<li>Stable income of the past 5 years</li>
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
