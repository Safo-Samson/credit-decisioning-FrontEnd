import Chart from "react-apexcharts";
import "./ApexCircle.css";

const ApexCircle = ({ progress }) => {
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
        startAngle: -185,
        endAngle: 195,
        hollow: {
          size: "70%",
        },
        track: {
          background: "#f2f2f2",
          strokeWidth: "270%",
          opacity: 100, // to show  the background semi cirlcde
          margin: 9, //controllin the width
        },
        dataLabels: {
          showOn: "always",
          name: {
            show: true,
            color: "#oooooo",
            fontSize: "28px",
            fontWeight: 900,
            offsetY: -2, //percentage positioning
          },
          value: {
            offsetY: 8,
            fontSize: "17px",
            color: "#666666", // Set the color based on the progress value
            formatter: () => "Affordability", // Set the progress text
          },
        },
      },
    },
    fill: {
      colors: progressColor, // always green
    },
    stroke: {
      lineCap: "square",
    },
    labels: [`${progress}%`],
  };

  const series = [progress - 8];

  return (
    <div className="apex-circle-container">
      <h1 className="apex-circle-h1">Affordability</h1>
      <Chart options={options} series={series} type="radialBar" height="302" />
    </div>
  );
};

export default ApexCircle;
