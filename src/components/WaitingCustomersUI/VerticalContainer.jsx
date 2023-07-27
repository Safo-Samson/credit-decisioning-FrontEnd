import './VerticalContainer.css';

const VerticalContainer = (props) => {
  return (
    <div className="vertical-container">
      <div className="button-container">
        <button className="button">Waiting     <span className="customer-count">{props.customers.length}</span></button>
         <div className="line"></div>
      </div> 

      <div className="button-container">
          <button className="button">Accepted </button>
         <div className="line"></div>
      </div> 

      <div className="button-container">
         
      <button className="button">Rejected</button>
         <div className="line"></div>
      </div> 

      <div className="button-container">
      <button className="button">Help</button>
      </div> 
    
        <button className="logout-button">Logout</button>
        <div className="line"></div>
      
     

    </div>
  );
};

export default VerticalContainer;
