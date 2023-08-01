import "./SelectedCustomer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const SelectedCustomer = (props) => {
	const navigate = useNavigate();
	const handleBack = (e) => {
		e.preventDefault();
		navigate("/AppUI");
	};
	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					marginLeft: "20px",
					borderRight: "1px solid black",
					marginRight: "50px",
				}}
			>
				<div className="deets-icon">
					<FontAwesomeIcon icon={faIdBadge} />
				</div>
				<div className="text-container in-text">
					<b>First Name</b>
					<br></br>
					{props.firstName}
					<br></br>
					<div className="text-line "></div>
				</div>
				<div className="text-container in-text">
					<b>Last Name</b>
					<br></br>
					{props.lastName}
					<br></br>
					<div className="text-line "></div>
				</div>
				<div className="text-container in-text">
					<b>Account No.</b>
					<br></br>
					{props.account}
					<br></br>
					<div className="text-line "></div>
				</div>
				<div className="text-container in-text">
					<b>Date Applied</b>
					<br></br>
					{props.date.toLocaleString()}
					<br></br>
					<div className="text-line "></div>
				</div>
				<button className="back-button" onClick={handleBack}>
					Back
				</button>
			</div>
		</>
	);
};

export default SelectedCustomer;
