import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./VerticalContainer.css";

const VerticalContainer = (props) => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeButton, setActiveButton] = useState(props.activeButton); // Initialize the active button state

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const navigate = useNavigate();

  const handleLogoutClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleButtonClick = (buttonName) => (e) => {
    e.preventDefault();
    setActiveButton(buttonName); // Set the active button when it is clicked
    console.log(buttonName);
    // Perform the navigation based on the clicked button
    if (buttonName === "Waiting") {
      navigate("/AppUI");
    } else if (buttonName === "Accepted") {
      navigate("/AcceptedUI");
    } else if (buttonName === "Rejected") {
      navigate("/RejectedUI");
    }
  };

  return (
    <div className="vertical-container">
      {/* The button to toggle visibility */}
      <button
        className={`toggle-button ${isVisible ? "visible" : "hidden"}`}
        onClick={toggleVisibility}>
        {isVisible ? (
          <FontAwesomeIcon icon={faCircleChevronLeft} />
        ) : (
          <FontAwesomeIcon icon={faCircleChevronRight} />
        )}
      </button>

      {isVisible && ( // Show VerticalContainer only when isVisible is true
        <div>
          <div className="vert-button-container">
            {/* Add a conditional className for the Waiting button */}
            <button
              className={`vert-button ${
                activeButton === "Waiting" ? "active" : ""
              }`}
              onClick={handleButtonClick("Waiting")}>
              Waiting{" "}
              <span className="customer-count">{props.customers.length}</span>
            </button>
            <div className="line"></div>
          </div>

          <div className="vert-button-container">
            {/* Add a conditional className for the Accepted button */}
            <button
              className={`vert-button ${
                activeButton === "Accepted" ? "active" : ""
              }`}
              onClick={handleButtonClick("Accepted")}>
              Accepted{" "}
            </button>
            <div className="line"></div>
          </div>

          <div className="vert-button-container">
            {/* Add a conditional className for the Rejected button */}
            <button
              className={`vert-button ${
                activeButton === "Rejected" ? "active" : ""
              }`}
              onClick={handleButtonClick("Rejected")}>
              Rejected
            </button>
            <div className="line"></div>
          </div>

          <div className="vert-button-container">
            <button className="vert-button">Help</button>
          </div>
        </div>
      )}

      {isVisible && (
        <>
          <button className="logout-button" onClick={handleLogoutClick}>
            Logout
          </button>
          <div className="line"></div>
        </>
      )}
    </div>
  );
};

export default VerticalContainer;
