const SearchBar = ({ filter, setFilter }) => {
  return (
    <div className="flexCenter search-bar" style={{ gap: "1rem" }}>
      <input
        placeholder="Search by title,city,country..."
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <button className="button">Search</button>
    </div>
  );
};

export default SearchBar;
