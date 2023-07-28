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
            <ProgressSemiCircle progress={84} />
            <ProgressCircle progress={92} />
            <ScoreSummary />
          </div>
          <button className="confirm-accept">accept</button>
          <button className="confirm-reject">accept</button>
        </div>
      </div>
    </>
  );
};

export default CreditScoreResult;
