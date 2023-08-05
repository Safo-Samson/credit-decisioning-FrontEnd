import React, { useState, useEffect } from "react";
import "../WaitingCustomersUI/ApplicationUI.css";
import CusApplication from "./CusApplication";
import VerticalContainer from "./VerticalContainer";
import { useLocation } from "react-router-dom";

const RejectedUI = (props) => {
  const location = useLocation();
  const [customerArray, setCustomerArray] = useState([]);

  useEffect(() => {
    // When the component mounts, retrieve the customer data from localStorage (if any)
    const storedCustomers = JSON.parse(
      localStorage.getItem("customers-rejected")
    );
    if (storedCustomers && customerArray.length === 0) {
      // checking length to prevent duplicates
      setCustomerArray(storedCustomers);
    }
  }, []);

  useEffect(() => {
    // When a new customer is received from the state, add it to the existing customer array
    if (location.state && location.state.customer) {
      setCustomerArray((prevCustomers) => [
        location.state.customer,
        ...prevCustomers,
      ]);
    }
  }, [location.state]);

  useEffect(() => {
    // Store the updated customerArray in localStorage whenever it changes
    localStorage.setItem("customers-rejected", JSON.stringify(customerArray));
  }, [customerArray]);

  // Pagination
  const customersPerPage = 5; // Number of customers to display per page
  const totalPages = Math.ceil(customerArray.length / customersPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  // Calculating the starting and ending index of customers for the current page
  const startIndex = (currentPage - 1) * customersPerPage;
  const endIndex = Math.min(
    startIndex + customersPerPage,
    customerArray.length
  );

  // Slice the customer array based on the current page
  const displayedCustomers = customerArray.slice(startIndex, endIndex);

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
      <VerticalContainer customers={customerArray} />

      <div className="remaining-content">
        <h5 style={headingStyle}>Rejected Applications</h5>
        {displayedCustomers.map((customer) => (
          <CusApplication
            key={customer.id} // very important to add key
            AccountNo={customer.id} //Account number
            dateApplied={customer.dateApplied}
            amount={customer.amount}
            loanType={customer.loanType}
            creditScore={customer.creditScore}
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

export default RejectedUI;
