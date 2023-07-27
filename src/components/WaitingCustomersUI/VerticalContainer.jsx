import './VerticalContainer.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';


const VerticalContainer = (props) => {


  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };


  return (
    <div className="vertical-container">

      {/* The button to toggle visibility */}
      <button className={`toggle-button ${isVisible ? 'visible' : 'hidden'}`} onClick={toggleVisibility}>
        {isVisible ? <FontAwesomeIcon icon={faCircleChevronLeft} /> : <FontAwesomeIcon icon={faCircleChevronRight} />}
      </button>



      {isVisible && ( // Show VerticalContainer only when isVisible is true
        <div>
          <div className="button-container">
            <button className="button">
              Waiting <span className="customer-count">{props.customers.length}</span>
            </button>
            <div className="line"></div>
          </div>

          <div className="button-container">
            <button className="button">Accepted</button>
            <div className="line"></div>
          </div>

          <div className="button-container">
            <button className="button">Rejected</button>
            <div className="line"></div>
          </div>

          <div className="button-container">
            <button className="button">Help</button>
          </div>
        </div>
      )}

      {isVisible && (
        <>
          <button className="logout-button">Logout</button>
          <div className="line"></div>
        </>
      )}
      

    </div>
  );
};

export default VerticalContainer;
