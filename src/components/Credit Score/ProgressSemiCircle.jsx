import React from "react";
import "./ProgressSemiCircle.css";

const ProgressSemiCircle = ({ progress }) => {
  const radius = 47.7;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 116) * circumference;

  let strokeColor;
  let progressText;
  if (progress < 40) {
    strokeColor = "red";
    progressText = "Poor";
  } else if (progress >= 40 && progress < 52) {
    strokeColor = "orange";
    progressText = "Bad";
  } else if (progress >= 52 && progress < 63) {
    strokeColor = "yellow";
    progressText = "Good";
  } else if (progress >= 63 && progress < 74) {
    strokeColor = "blue";
    progressText = "Very Good";
  } else {
    strokeColor = "green";
    progressText = "Excellent";
  }

  return (
    <>
      <div
        className="progress-semicircle-container"
        style={{ "--progress-stroke-color": strokeColor }}>
        <h1 className="progress-semicircle-h1">Credit Score</h1>
        <svg className="progress-semicircle" viewBox="0 0 100 100">
          <circle
            className="progress-semicircle-track"
            cx="98.8"
            cy="50"
            r={radius}
          />
          <circle
            className="progress-semicircle-indicator"
            cx="98.8"
            cy="50"
            r={radius}
            style={{
              strokeDasharray: `${circumference} ${circumference}`,
              strokeDashoffset: offset,
            }}
          />
        </svg>
        <div className="progress-semicircle-percentage">
          {`${Math.floor((progress / 10) * 100)}`}
          <div className="progress-semicircle-text">{progressText}</div>
        </div>
      </div>
    </>
  );
};

export default ProgressSemiCircle;
