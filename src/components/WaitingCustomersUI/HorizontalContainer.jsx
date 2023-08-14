import "./HorizontalContainer.css";
import horseLogo from "../../assets/horseLogo.jpeg";
import SearchBox from "./SearchBox";
import React from "react";

const HorizontalContainer = () => {
	return (
		<div className="horizontal-container">
			<div className="logo-container">
				<img src={horseLogo} alt="Lloyds horse logo" className="bank-logo" />
				<div className="logo-text">Lloyds bank</div>
			</div>
			<SearchBox />
			{/* <i className="fa fa-user profile-icon"></i> */}

			<div className="custom-dropdown">
				<div className="dropdown-header"><i className="fa fa-user profile-icon"></i></div>
					<div className="dropdown-content">
						<a href="#">My Account</a>
						<a href="#">Privacy & Security</a>
						<a href="#">Help</a>
						<a href="#">Logout</a>
					</div>
			</div>
		</div>
	);
};

export default React.memo(HorizontalContainer);
