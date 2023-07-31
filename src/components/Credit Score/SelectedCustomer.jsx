import "./SelectedCustomer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";

const SelectedCustomer = ({ customers }) => {
  const handleBack = (e) => {
    e.preventDefault();
    navigate("/");

}
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "20px",
          borderRight: "1px solid black",
        }}>
        <div className="deets-icon">
          <FontAwesomeIcon icon={faIdBadge} />
        </div>
        <div className="text-container in-text">
          <b>First Name</b>
          <br></br>
          {customers[0].name}
          <br></br>
          <div className="text-line "></div>
        </div>

        <div className="text-container in-text">
          <b>Last Name</b>
          <br></br>
          {customers[0].name}
          <br></br>
          <div className="text-line "></div>
        </div>

        <div className="text-container in-text">
          <b>Account No.</b>
          <br></br>
          {customers[0].AccountNo}
          <br></br>
          <div className="text-line "></div>
        </div>

        <div className="text-container in-text">
          <b>Date Applied</b>
          <br></br>
          {customers[0].dateApplied.toLocaleString()}
          <br></br>
          <div className="text-line "></div>
        </div>

        <button className="back-button">Back</button>
      </div>
    </>
  );
};

export default SelectedCustomer;
