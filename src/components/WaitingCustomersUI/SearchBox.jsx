import "./SearchBox.css";
const SearchBox = () => {
	return (
		<div className="search-box">
			<i className="fa fa-search search-icon"></i>
			<input className="in" type="text" placeholder="   Search" />
		</div>
	);
};

export default SearchBox;
