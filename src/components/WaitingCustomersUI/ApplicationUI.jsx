import React, { useState, useEffect } from "react";
import "../WaitingCustomersUI/ApplicationUI.css";
import CusApplication from "../WaitingCustomersUI/CusApplication";
import VerticalContainer from "../WaitingCustomersUI/VerticalContainer";

const AppUI = (props) => {
	/***********************
	 * PAGINATION LOGIC BELOW
	 **********************/
	const customersPerPage = 8; // Number of customers to display per page
	const totalPages = Math.ceil(props.customers.length / customersPerPage);

	const [currentPage, setCurrentPage] = useState(1);

	// Calculating the starting and ending index of customers for the current page
	const startIndex = (currentPage - 1) * customersPerPage;
	const endIndex = Math.min(
		startIndex + customersPerPage,
		props.customers.length,
	);

	// Slice the customers array based on the current page
	const displayedCustomers = props.customers.slice(startIndex, endIndex);

	const handlePrevPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
	};

	const handleNextPage = () => {
		setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
	};
	/***********************
	 * DATE FILTER LOGIC BELOW
	 **********************/
	const [showFilters, setShowFilters] = useState(false);

	const toggleShowFilters = () => {
		setShowFilters((prevShowFilters) => !prevShowFilters);
	};

	const [filterYear, setFilterYear] = useState("");
	const [filterMonth, setFilterMonth] = useState("");
	const [filterDay, setFilterDay] = useState("");
	const [filterLoanType, setFilterLoanType] = useState("");

	// Filter the displayed customers based on the filter options
	let filteredCustomers = props.customers.filter((customer) => {
		if (!filterYear && !filterMonth && !filterDay && !filterLoanType)
			return true;

		const customerDate = new Date(customer.dateApplied);
		const customerYear = customerDate.getFullYear();
		const customerMonth = customerDate.getMonth() + 1;
		const customerDay = customerDate.getDate();

		if (filterYear && filterMonth && filterDay && filterLoanType) {
			// filtering by full date and loan type
			return (
				customerYear === Number(filterYear) &&
				customerMonth === Number(filterMonth) &&
				customerDay === Number(filterDay) &&
				customer.loanType.toLowerCase().includes(filterLoanType.toLowerCase())
			);
		}
		if (filterYear && filterMonth && filterDay) {
			// filtering by full date
			return (
				customerYear === Number(filterYear) &&
				customerMonth === Number(filterMonth) &&
				customerDay === Number(filterDay)
			);
		} else if (filterYear && filterMonth) {
			// filtering by year and month
			return (
				customerYear === Number(filterYear) &&
				customerMonth === Number(filterMonth)
			);
		} else if (filterMonth && filterDay && !filterYear) {
			//filtering by day and month only
			return (
				customerDay === Number(filterDay) &&
				customerMonth === Number(filterMonth)
			);
		} else if (filterYear) {
			// filtering by only year
			return customerYear === Number(filterYear);
		} else if (filterMonth) {
			// filterting by month only
			return customerMonth === Number(filterMonth);
		}

		if (filterLoanType) {
			const customerLoanType = customer.loanType.toLowerCase();
			return customerLoanType.includes(filterLoanType.toLowerCase());
		}

		return true;
	});
	const resultsFound = filteredCustomers.length;
	// pagination for the filtered customers
	filteredCustomers = filteredCustomers.slice(startIndex, endIndex);

	const generateNumberArray = (start, end) => {
		const numbers = [];
		for (let i = start; i <= end; i++) {
			numbers.push(i);
		}
		return numbers;
	};

	// Generate arrays for days (1 to 31) and months (1 to 12)
	const daysArray = generateNumberArray(1, 31);
	const monthsArray = generateNumberArray(1, 12);
	const [yearsArray, setYearsArray] = useState([]);

	useEffect(() => {
		const currentYear = new Date().getFullYear();
		const years = generateNumberArray(2000, currentYear);
		setYearsArray(years);
	}, []);

	const noResultsMessage = "No results for the applied filters.";
	const noCustomersMessage = "There is currently no customers waiting...";

	// normal styling for the header
	const headingStyle = {
		textAlign: "center",
		fontSize: "24px",
		fontWeight: "bold",
		color: "#333",
	};

	return (
		<div className="app-container">
			<VerticalContainer customers={props.customers} activeButton={"Waiting"} />

			<div className="remaining-content">
				<h5 style={headingStyle}>
					Waiting Applications ({props.customers.length})
				</h5>
				<button className="toggle-filter-button" onClick={toggleShowFilters}>
					{showFilters ? "Hide Filters" : "Apply Filters"}
				</button>

				{showFilters && (
					<>
						<div className="filter-container">
							<h4>Date Applied:</h4>
							<label htmlFor="filterYear">Year:</label>
							<select
								id="filterYear"
								value={filterYear}
								onChange={(e) => setFilterYear(e.target.value)}
							>
								<option value="">Any</option>
								{yearsArray.map((year) => (
									<option key={year} value={year}>
										{year}
									</option>
								))}
							</select>
							<label htmlFor="filterMonth">Month:</label>
							<select
								id="filterMonth"
								value={filterMonth}
								onChange={(e) => setFilterMonth(e.target.value)}
							>
								<option value="">Any</option>
								{monthsArray.map((month) => (
									<option key={month} value={month}>
										{month}
									</option>
								))}
							</select>
							<label htmlFor="filterDay">Day:</label>
							<select
								id="filterDay"
								value={filterDay}
								onChange={(e) => setFilterDay(e.target.value)}
							>
								<option value="">Any</option>
								{daysArray.map((day) => (
									<option key={day} value={day}>
										{day}
									</option>
								))}
							</select>
							<button
								className="filter-button"
								onClick={() => {
									setFilterYear("");
									setFilterDay("");
									setFilterMonth("");
								}}
							>
								Clear Filter
							</button>
						</div>
						<div className="filter-container">
							<h4>Loan Type:</h4>
							<label htmlFor="filterLoanType"></label>
							<select
								id="filterLoanType"
								value={filterLoanType}
								onChange={(e) => setFilterLoanType(e.target.value)}
							>
								<option value="">Any</option>
								<option value="Mortgage">Mortgage Loan</option>
								<option value="Personal Loan">Personal Loan</option>
								<option value="Credit Card">Credit Card Loan </option>
								<option value="Car Loan">Car Loan</option>
							</select>

							<button
								className="filter-button"
								onClick={() => setFilterLoanType("")}
							>
								Clear Filter
							</button>
						</div>
						<div className="results-number">
							{resultsFound} results found on current filter.
						</div>
					</>
				)}

				{displayedCustomers.length === 0 ? (
					<div className="no-results-message">{noCustomersMessage}</div>
				) : filteredCustomers.length === 0 ? (
					<div className="no-results-message">{noResultsMessage}</div>
				) : (
					/* Otherwise, render the CusApplication components */
					filteredCustomers.map((customer) => (
						<CusApplication
							key={customer.id} // very important to add key
							AccountNo={customer.id} //Account number
							dateApplied={customer.dateApplied}
							amount={customer.amount}
							loanType={customer.loanType}
							name={customer.name}
							creditScore={customer.creditScore}
							birthDate={customer.birthDate}
						/>
					))
				)}

				<div className="pagination">
					<button
						className="prev-pagination"
						disabled={currentPage === 1}
						onClick={handlePrevPage}
					>
						Prev
					</button>
					<span>{`Page ${currentPage} of ${totalPages}`}</span>
					<button
						className="next-pagination"
						disabled={currentPage === totalPages}
						onClick={handleNextPage}
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default AppUI;
