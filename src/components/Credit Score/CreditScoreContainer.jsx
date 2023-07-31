import "./CreditScoreContainer.css";
import VerticalContainer from "../WaitingCustomersUI/VerticalContainer";
import CreditScoreResult from "./CreditScoreResult";
import SelectedCustomer from "./SelectedCustomer";

function CreditScoreContainer(props) {
	return (
		<div className="gen-container">
			<VerticalContainer customers={props.customers} />

			<div className="gen-remaining-content">
				<h4 className="score-header">Review Details</h4>
				<div className="credit-result-display">
					<SelectedCustomer customers={props.customers} />
					<CreditScoreResult customers={props.customers} />
				</div>
			</div>
		</div>
	);
}

export default CreditScoreContainer;
