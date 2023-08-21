import "./HorizontalContainer.css";
import horseLogo from "../../assets/horseLogo.jpeg";
import SearchBox from "./SearchBox";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faQuestion,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const HorizontalContainer = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  // Function to toggle search visibility
  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  return (
    <div className="horizontal-container">
      <div className="logo-container">
        <img src={horseLogo} alt="Lloyds horse logo" className="bank-logo" />
        <div className="logo-text">Lloyds bank</div>
      </div>
      {isSearchVisible && <SearchBox />}

      <div className="fontIcons-Display">
        <div className="custom-dropdown">
          <div className="dropdown-header">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "30px",
                }}>
                <FontAwesomeIcon icon={faUser} />
                <div style={{ fontSize: "15px" }}>Profile </div>
              </div>
            </div>
          </div>
          <div className="dropdown-content">
            <a href="#">My Account</a>
            <a href="#">Privacy & Security</a>
            <a href="#">Help</a>
            <Link to="/">Logout</Link>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "30px",
          }}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            onClick={toggleSearchVisibility}
          />
          <div style={{ fontSize: "15px" }}> search </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "30px",
          }}>
          <FontAwesomeIcon icon={faQuestion} />
          <div style={{ fontSize: "15px" }}> Help </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "30px",
          }}>
          <FontAwesomeIcon icon={faLocationDot} />
          <div style={{ fontSize: "15px" }}>Branch </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HorizontalContainer);
