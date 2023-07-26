import '../WaitingCustomersUI/ApplicationUI.css';
import CusApplication from "../WaitingCustomersUI/CusApplication";
import VerticalContainer from "../WaitingCustomersUI/VerticalContainer";

const AppUI = (props) => {
	
	return (
		<div className='app-container'>
			
			<VerticalContainer />
			
			<div className='remaining-content'>

				{props.customers.map((customer) =>
					<CusApplication
					key={customer.id} // very important to add key
					title={customer.name}
					AccountNo={customer.AccountNo}
					dateApplied={customer.dateApplied}
					amount={customer.amount}
					loanType={customer.loanType}
					name={customer.name}
					
					/>)};
				
			</div>
			
		</div>
	);
};

export default AppUI;
