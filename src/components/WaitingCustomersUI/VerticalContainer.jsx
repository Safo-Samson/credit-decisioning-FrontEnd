import "./VerticalContainer.css";

const VerticalContainer = () => {
	return (
		<div className="vertical-container">
			<div className="button-container">
				<button className="v-button">Waiting </button>
				<div className="line"></div>
			</div>

			<div className="button-container">
				<button className="v-button">Accepted </button>
				<div className="line"></div>
			</div>

			<div className="button-container">
				<button className="v-button">Rejected</button>
				<div className="line"></div>
			</div>

			<div className="button-container">
				<button className="v-button">Help</button>
				<div className="line"></div>
			</div>

			<button className="logout-button">Logout</button>
			<div className="line"></div>
		</div>
	);
};

export default VerticalContainer;
