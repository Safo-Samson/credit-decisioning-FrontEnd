import "./SearchBox.css";

const SearchBox = () => {
  return (
    <div className="search-box">
      <i className="fa fa-search search-icon"></i>
      <input type="text" placeholder="Search" className="search-input" />
    </div>
  );
};

export default SearchBox;
