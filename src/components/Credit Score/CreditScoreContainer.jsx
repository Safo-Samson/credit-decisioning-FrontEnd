import "./CreditScoreContainer.css";
import VerticalContainer from "../WaitingCustomersUI/VerticalContainer";
import CreditScoreResult from "./CreditScoreResult";

function CreditScoreContainer(props) {
  return (
    <div className="gen-container">
      <VerticalContainer customers={props.customers} />

      <div className="gen-remaining-content">
        <h4 className="score-header">Review Details</h4>

        <div className="credit-result-display">
          <CreditScoreResult customers={props.customers} />
          {/* <div class="vertical-line"></div> */}
        </div>
      </div>
    </div>
  );
}

export default CreditScoreContainer;
