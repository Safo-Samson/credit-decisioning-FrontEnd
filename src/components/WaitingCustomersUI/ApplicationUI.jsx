import "../WaitingCustomersUI/ApplicationUI.css";
import CusApplication from "../WaitingCustomersUI/CusApplication";
import VerticalContainer from "../WaitingCustomersUI/VerticalContainer";

const AppUI = (props) => {
	return (
		<div className="app-container">
			<VerticalContainer customers={props.customers} />

			<div className="remaining-content">
				{props.customers.map((customer) => (
					<CusApplication
						key={customer.id} // very important to add key
						AccountNo={customer.id} //Account number
						dateApplied={customer.dateApplied}
						amount={customer.amount}
						loanType={customer.loanType}
						name={customer.name}
					/>
				))}
			</div>
		</div>
	);
};

export default AppUI;
