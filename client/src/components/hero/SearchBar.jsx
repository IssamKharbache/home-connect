const SearchBar = ({ filter, setFilter }) => {
  return (
    <div className="flexCenter search" style={{ gap: "1rem" }}>
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
