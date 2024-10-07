const SearchBar = ({ filter, setFilter }) => {
  return (
    <div
      className="flexStart search"
      style={{ gap: "1rem", width: "100%", flexWrap: "wrap" }}
    >
      <div className="search-bar">
        <input
          placeholder="Search by title,city,country..."
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <button className="button">Search</button>
    </div>
  );
};

export default SearchBar;
