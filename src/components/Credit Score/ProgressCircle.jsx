import React from "react";
import "./ProgressCircle.css";

const ProgressCircle = ({ progress }) => {
	const radius = 47;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference - (progress / 100) * circumference;

	return (
		<>
			<div className="progress-circle-container">
				<h1 className="progress-h1">Affordability</h1>
				<svg className="progress-circle" viewBox="0 0 100 100">
					<circle
						className="progress-circle-track"
						cx="50"
						cy="50"
						r={radius}
					/>
					<circle
						className="progress-circle-indicator"
						cx="50"
						cy="50"
						r={radius}
						style={{
							strokeDasharray: `${circumference} ${circumference}`,
							strokeDashoffset: offset,
						}}
					/>
				</svg>
				<div className="progress-percentage">
					{`${progress}%`}
					<div className="progress-text">Affordability</div>
				</div>
			</div>
		</>
	);
};

export default ProgressCircle;
