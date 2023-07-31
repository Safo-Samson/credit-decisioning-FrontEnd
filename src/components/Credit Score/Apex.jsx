import Chart from "react-apexcharts";
import "./Apex.css";

const Apex = ({ progress }) => {
	let Color, progressText;

	if (progress < 40) {
		Color = "red";
		progressText = "Poor";
	} else if (progress >= 40 && progress < 52) {
		Color = "orange";
		progressText = "Bad";
	} else if (progress >= 52 && progress < 63) {
		Color = "yellow";
		progressText = "Good";
	} else if (progress >= 63 && progress < 74) {
		Color = "blue";
		progressText = "Very Good";
	} else {
		Color = "green";
		progressText = "Excellent";
	}

	const getColorBasedOnProgress = (progress) => {
		if (progress < 40) {
			return "#FF0000"; // Red
		} else if (progress >= 40 && progress < 52) {
			return "#FFA500"; // Orange
		} else if (progress >= 52 && progress < 63) {
			return "#FFFF00"; // Yellow
		} else if (progress >= 63 && progress < 74) {
			return "#0000FF"; // Blue
		} else {
			return "#008000"; // Green
		}
	};

	const progressColor = getColorBasedOnProgress(progress);

	const options = {
		plotOptions: {
			radialBar: {
				startAngle: -95,
				endAngle: 95,
				hollow: {
					size: "70%",
				},
				track: {
					background: "#f2f2f2",
					strokeWidth: "100%",
					opacity: 100, // to show  the background semi cirlcde
					margin: 9, //controllin the width
				},
				dataLabels: {
					showOn: "always",
					name: {
						show: true,
						color: "#oooooo",
						fontSize: "55px",
						fontWeight: 900,
						offsetY: -30,
					},
					value: {
						offsetY: 8,
						fontSize: "20px",
						color: "#666666", // Set the color based on the progress value
						formatter: () => progressText, // Set the progress text
					},
				},
			},
		},
		fill: {
			colors: [progressColor], // Set the color based on the progress value
		},
		stroke: {
			lineCap: "square",
		},
		labels: [Math.floor((progress / 10) * 100)],
	};

	const series = [progress];

	return (
		<div className="apex-container">
			<h1 className="apex-semicircle-h1">Credit Score</h1>
			<Chart options={options} series={series} type="radialBar" height="402" />
		</div>
	);
};

export default Apex;
