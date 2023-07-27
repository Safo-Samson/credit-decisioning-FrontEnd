import AppUI from "./components/WaitingCustomersUI/ApplicationUI";
import HorizontalContainer from "./components/WaitingCustomersUI/HorizontalContainer";

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
		name: "Safo Samson",
		amount: 3450,
		dateApplied: new Date(2021, 5, 12),
		loanType: "Car Loan",
		AccountNo: "234532",
	},
	{
		id: "e6",
		name: "Saffron Zainchkovkaya",
		amount: 34450,
		dateApplied: new Date(2021, 5, 12),
		loanType: "Mortgage",
		AccountNo: "232532",
	},
		{
		id: "e7",
		name: "DaLma Rita",
		amount: 347450,
		dateApplied: new Date(2021, 5, 12),
		loanType: "Mortgage",
		AccountNo: "222532",
	},
];

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<LoginForm />} />
				<Route
					path="AppUI"
					element={
						<>
							<HorizontalContainer /> <AppUI customers={customers} />
						</>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
