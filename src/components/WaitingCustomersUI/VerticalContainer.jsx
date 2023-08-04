import "./VerticalContainer.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleChevronLeft,
	faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const VerticalContainer = (props) => {
	const [isVisible, setIsVisible] = useState(true);

	const toggleVisibility = () => {
		setIsVisible(!isVisible);
	};

	const navigate = useNavigate();

  const handleLogoutClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleWaiting = (e) => {
    e.preventDefault();
    navigate("/AppUI");
  };

  const handleAccepted = (e) => {
    e.preventDefault();
    navigate("/AcceptedUI");
  };

  const handleRejected = (e) => {
    e.preventDefault();
    navigate("/RejectedUI");
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
            <button className="vert-button" onClick={handleWaiting}>
              Waiting{" "}
              <span className="customer-count">{props.customers.length}</span>
            </button>
            <div className="line"></div>
          </div>

          <div className="vert-button-container">
            <button className="vert-button" onClick={handleAccepted}>
              Accepted{" "}
            </button>
            <div className="line"></div>
          </div>

          <div className="vert-button-container">
            <button className="vert-button" onClick={handleRejected}>
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
