import Apex from "./Apex";
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
						{/* <ProgressSemiCircle progress={64} /> */}
						<Apex progress={73.5} />
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
