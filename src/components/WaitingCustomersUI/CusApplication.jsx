import "./CusApplication.css";
const CusApplication = (probs) => {
	return (
		<div className="customer-item">
			<div className="details-page"> {probs.name}</div>
			<div className="details-page">
				<p>Account No:</p>
				<span>{probs.AccountNo}</span>
			</div>

			<div className="details-page-extended">
				<p>Date Applied:</p>
				<span><p>{probs.dateApplied.toLocaleString()}</p></span>
			</div>

			<div className="customer-item__description">
				<h3>{probs.loanType}</h3>
				<h3>£{probs.amount}</h3>
			</div>
		</div>
	);
};

export default CusApplication;
