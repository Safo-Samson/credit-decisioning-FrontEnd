import "./CreditScoreResult.css";

import ProgressCircle from "./ProgressCircle";
import ProgressSemiCircle from "./ProgressSemiCircle";
import ScoreSummary from "./ScoreSummary";
import { useState } from "react";
import AcceptPopup from "../AcceptPopUp";

const CreditScoreResult = (props) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleAcceptPopup = () => {
		setIsOpen(!isOpen);
	  }
	return (
		<>
			<div className="credit-container">
				<div className="credit-remaining-content">
					<div className="progress-containers">
						<ProgressSemiCircle progress={84} />
						<ProgressCircle progress={92} />
						<ScoreSummary />
					</div>
					<button className="confirm-accept" onClick={toggleAcceptPopup}>Accept</button>
					{isOpen && <AcceptPopup
      						content={<>
        			<b>Accepted!</b>
        			<button>Test button</button>
      				</>}  handleClose={toggleAcceptPopup}/>}
					
					<button className="confirm-reject">Reject</button>
				</div>
			</div>
		</>
	);
};

export default CreditScoreResult;
