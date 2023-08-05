import React, { useState } from "react";
import "../WaitingCustomersUI/ApplicationUI.css";
import CusApplication from "../WaitingCustomersUI/CusApplication";
import VerticalContainer from "../WaitingCustomersUI/VerticalContainer";

const AppUI = (props) => {
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
        <h5 style={headingStyle}>Waiting Applications</h5>
        {displayedCustomers.map((customer) => (
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
        ))}

        <div className="pagination">
          <button
            className="prev-pagination"
            disabled={currentPage === 1}
            onClick={handlePrevPage}>
            Prev
          </button>
          <span>{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            className="next-pagination"
            disabled={currentPage === totalPages}
            onClick={handleNextPage}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppUI;
