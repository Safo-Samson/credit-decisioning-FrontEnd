import '../WaitingCustomersUI/ApplicationUI.css';
import CusApplication from "../WaitingCustomersUI/CusApplication";
import VerticalContainer from "../WaitingCustomersUI/VerticalContainer";

const AppUI = () => {
	const customers = [
		{
			id: "e1",
			name: "Claudia Coni",
			amount: 2394.12,
			dateApplied: new Date(2020, 7, 14),
			loanType: "Personal Loan",
			AccountNo: "112344",
		},
		{
			id: "e2",
			name: "Sevgi Unal",
			amount: 5799.49,
			dateApplied: new Date(2021, 2, 12),
			loanType: "Credit Card",
			AccountNo: "234344",
		},
		{
			id: "e3",
			name: "Daniel Kim",
			amount: 2294.67,
			dateApplied: new Date(2021, 2, 28),
			loanType: "Credit Card",
			AccountNo: "563344",
		},
		{
			id: "e4",
			name: "James Bird",
			amount: 4450,
			dateApplied: new Date(2021, 5, 12),
			loanType: "Personal Loan",
			AccountNo: "3242324",
		},
		{
			id: "e5",
			name: "Sevgi Unal",
			amount: 3450,
			dateApplied: new Date(2021, 5, 12),
			loanType: "Car Loan",
			AccountNo: "234532",
		},
	];

	return (
		<div className='app-container'>
			<VerticalContainer />
			
			<div className='remaining-content'>
           <CusApplication
				title={customers[0].name}
				AccountNo={customers[0].AccountNo}
				dateApplied={customers[0].dateApplied}
				amount={customers[0].amount}
				loanType={customers[0].loanType}
				name={customers[0].name}
			/>
			<CusApplication
				title={customers[1].name}
				AccountNo={customers[1].AccountNo}
				dateApplied={customers[1].dateApplied}
				amount={customers[1].amount}
				loanType={customers[1].loanType}
				name={customers[1].name}
			/>
			<CusApplication
				title={customers[2].name}
				AccountNo={customers[2].AccountNo}
				dateApplied={customers[2].dateApplied}
				amount={customers[2].amount}
				loanType={customers[2].loanType}
				name={customers[2].name}
			/>
			<CusApplication
				title={customers[3].name}
				AccountNo={customers[3].AccountNo}
				dateApplied={customers[3].dateApplied}
				amount={customers[3].amount}
				loanType={customers[3].loanType}
				name={customers[3].name}
			/>
			</div>
			
		</div>
	);
};

export default AppUI;
