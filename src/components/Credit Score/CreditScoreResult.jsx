import VerticalContainer from "../WaitingCustomersUI/VerticalContainer";
import "./CreditScoreResult.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
import CreditScoreSemiCircle from "./CreditScoreSemiCircle";
import ProgressCircle from "./ProgressCircle";

const CreditScoreResult = (props) => {
  return (
    <div className="credit-container">
      <VerticalContainer customers={props.customers} />

      <div className="credit-remaining-content">
        <div className="deets-icon">
          <FontAwesomeIcon icon={faIdBadge} />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="text-container in-text">
            FirstName<br></br>
            {props.customers[0].name}
            <br></br>
            <div className="text-line "></div>
          </div>

          <div className="text-container in-text">
            FirstName<br></br>
            {props.customers[0].name}
            <br></br>
            <div className="text-line "></div>
          </div>

          <div className="text-container in-text">
            Account No.<br></br>
            {props.customers[0].AccountNo}
            <br></br>
            <div className="text-line "></div>
          </div>

          <div className="text-container in-text">
            Date Applied<br></br>
            {props.customers[0].dateApplied.toLocaleString()}
            <br></br>
            <div className="text-line "></div>
          </div>

          <button className="back-button">Back</button>
          <div class="vertical-line"></div>
        </div>
      </div>

      <ProgressCircle progress={70} />
    </div>
  );
};

export default CreditScoreResult;
