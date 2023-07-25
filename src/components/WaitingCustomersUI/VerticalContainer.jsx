import './VerticalContainer.css';

const VerticalContainer = () => {
  return (
    <div className="vertical-container">

      <div class="button-container">
          <button className="button">Waiting </button>
         <div class="line"></div>
      </div> 

      <div class="button-container">
          <button className="button">Accepted </button>
         <div class="line"></div>
      </div> 

      <div class="button-container">  
      <button className="button">Rejected</button>
         <div class="line"></div>
      </div> 

      <div class="button-container">
      <button className="button">Help</button>
      </div> 
      
     

    </div>
  );
};

export default VerticalContainer;
