import Apex from "./Apex";
import "./CreditScoreResult.css";

import ProgressCircle from "./ProgressCircle";
import ProgressSemiCircle from "./ProgressSemiCircle";
import ScoreSummary from "./ScoreSummary";
import { useState } from "react";
import Popup from "../PopUp";

const CreditScoreResult = (props) => {
	const [acceptOpen, setAcceptOpen] = useState(false);
	const [rejectOpen, setRejectOpen] = useState(false);

	const toggleAcceptPopup = () => {
		setAcceptOpen(!acceptOpen);
	};

	const toggleRejectPopUp = () => {
		setRejectOpen(!rejectOpen);
	};
	return (
		<>
			<div className="credit-container">
				<div className="credit-remaining-content">
					<div className="progress-containers">
						{/* <ProgressSemiCircle progress={84} /> */}
						<Apex progress={72.2} />
						<ProgressCircle progress={92} />
						<ScoreSummary />
					</div>
					<button className="confirm-accept" onClick={toggleAcceptPopup}>
						Accept
					</button>
					{acceptOpen && (
						<Popup
							content={
								<>
									<b>Accepted!</b>
								</>
							}
							handleClose={toggleAcceptPopup}
							type="accepted"
						/>
					)}

					<button className="confirm-reject" onClick={toggleRejectPopUp}>
						Reject
					</button>
					{rejectOpen && (
						<Popup
							content={
								<>
									<b>Rejected!</b>
								</>
							}
							handleClose={toggleRejectPopUp}
							type= "rejected"
						/>
					)}
				</div>
			</div>
		</>
	);
};

export default CreditScoreResult;
