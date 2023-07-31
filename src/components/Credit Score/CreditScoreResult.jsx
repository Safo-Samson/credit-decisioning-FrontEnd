import "./CreditScoreResult.css";

import ProgressCircle from "./ProgressCircle";
import ProgressSemiCircle from "./ProgressSemiCircle";
import ScoreSummary from "./ScoreSummary";

const CreditScoreResult = (props) => {
	return (
		<>
			<div className="credit-container">
				<div className="credit-remaining-content">
					<div className="progress-containers">
						<div className="creditScore">
							<ProgressSemiCircle progress={84} />
						</div>
						<ProgressCircle progress={92} />
						<ScoreSummary />
					</div>
					<button className="confirm-accept">accept</button>
					<button className="confirm-reject">reject</button>
				</div>
			</div>
		</>
	);
};

export default CreditScoreResult;
