import AppUI from "./components/WaitingCustomersUI/ApplicationUI";
import HorizontalContainer from "./components/WaitingCustomersUI/HorizontalContainer";
import LoginForm from "./components/LoginForm";
import ReviewInformation from "./components/ReviewInformation/ReviewInformation";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CreditScoreContainer from "./components/Credit Score/CreditScoreContainer";
import AcceptedUI from "./components/WaitingCustomersUI/AcceptedUI";
import RejectedUI from "./components/WaitingCustomersUI/RejectedUI";
import { useState, useEffect, useCallback } from "react";

function App() {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getWaitingCustomers = useCallback(async () => {
    setLoading(true);
    fetch("http://77.91.124.124:5000/waiting-users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // Sort the data based on the date in ascending order

        const sortedCustomers = data.sort(
          (a, b) => new Date(a.dateApplied) - new Date(b.dateApplied)
        );

        // Take the first 7 customers from the sorted data
        const firstFewCustomers = sortedCustomers.slice(100, 500);
        setCustomers(firstFewCustomers);
        console.log(firstFewCustomers);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    setLoading(false);
  }, [customers]);

  useEffect(() => {
    const identifier = setTimeout(() => {
      getWaitingCustomers();
    }, 1700);

    return () => {
      clearTimeout(identifier);
    }; //cleanup function
  }, [getWaitingCustomers, customers]);

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route
          path="/AppUI"
          element={
            <>
              <HorizontalContainer />
              {!isLoading && customers.length > 0 && (
                <AppUI customers={customers} />
              )}

              {!isLoading && customers.length === 0 && (
                <AppUI customers={customers} />
              )}

              {isLoading && customers.length === 0 && (
                <>
                  {" "}
                  <h1 className="waiting-loading">
                    Fetching waiting customers...
                  </h1>
                  <h1 className="loading-spinner"></h1>
                </>
              )}
            </>
          }
        />
        <Route
          path="/ReviewInformation"
          element={
            <>
              <HorizontalContainer />{" "}
              <ReviewInformation customers={customers} />
            </>
          }
        />
        <Route
          path="/CreditScore"
          element={
            <>
              <HorizontalContainer />
              <CreditScoreContainer customers={customers} />
            </>
          }
        />
        <Route
          path="/AcceptedUI"
          element={
            <>
              <HorizontalContainer />
              <AcceptedUI customers={customers} />
            </>
          }
        />

        <Route
          path="/RejectedUI"
          element={
            <>
              <HorizontalContainer />
              <RejectedUI />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;

// const customers = [
// 	{
// 		id: "e1",
// 		name: "Claudia Coni",
// 		amount: 2394.12,
// 		dateApplied: new Date(2020, 7, 14),
// 		loanType: "Personal Loan",
// 		AccountNo: "112344",
// 	},
// 	{
// 		id: "e2",
// 		name: "Sevgi Unal",
// 		amount: 5799.49,
// 		dateApplied: new Date(2021, 2, 12),
// 		loanType: "Credit Card",
// 		AccountNo: "234344",
// 	},
// 	{
// 		id: "e3",
// 		name: "Daniel Kim",
// 		amount: 2294.67,
// 		dateApplied: new Date(2021, 2, 28),
// 		loanType: "Credit Card",
// 		AccountNo: "563344",
// 	},
// 	{
// 		id: "e4",
// 		name: "James Bird",
// 		amount: 4450,
// 		dateApplied: new Date(2021, 5, 12),
// 		loanType: "Personal Loan",
// 		AccountNo: "3242324",
// 	},
// 	{
// 		id: "e5",
// 		name: "Safo Samson",
// 		amount: 3450,
// 		dateApplied: new Date(2021, 5, 12),
// 		loanType: "Car Loan",
// 		AccountNo: "234532",
// 	},
// 	{
// 		id: "e6",
// 		name: "Saffron Zainchkovkaya",
// 		amount: 34450,
// 		dateApplied: new Date(2021, 5, 12),
// 		loanType: "Mortgage",
// 		AccountNo: "232532",
// 	},
// 	{
// 		id: "e7",
// 		name: "DaLma Rita",
// 		amount: 347450,
// 		dateApplied: new Date(2021, 5, 12),
// 		loanType: "Mortgage",
// 		AccountNo: "222532",
// 	},
// ];
