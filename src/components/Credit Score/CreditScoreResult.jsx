import Apex from "./Apex";
import ApexCircle from "./ApexCircle";
import "./CreditScoreResult.css";
import ProgressCircle from "./ProgressCircle";
import ProgressSemiCircle from "./ProgressSemiCircle";
import ScoreSummary from "./ScoreSummary";
import { useState } from "react";
import Popup from "../PopUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

const CreditScoreResult = ({ creditScore }) => {
	const [acceptOpen, setAcceptOpen] = useState(false);
	const [rejectOpen, setRejectOpen] = useState(false);
	const [comments, setComments] = useState("");

	const toggleAcceptPopup = (props) => {
		if (!rejectOpen) {
			setAcceptOpen(!acceptOpen);
		  }
		
	};

	const toggleRejectPopUp = () => {
		if (!acceptOpen) {
			setRejectOpen(!rejectOpen);
		  }
	};

	return (
		<>
			<div className="credit-container">
				<div className="credit-remaining-content">
					<div className="progress-containers">
						
						<Apex progress={creditScore} />
						<ApexCircle progress={42} />
						<ScoreSummary />
					</div>

					<button className={`confirm-accept ${rejectOpen ? "disabled" : ""}`}
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

					<button className={`confirm-reject ${acceptOpen ? "disabled" : ""}`}
					 onClick={toggleRejectPopUp}
					 disabled = {acceptOpen}>
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
