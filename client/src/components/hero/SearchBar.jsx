import React from "react";
import { HiLocationMarker } from "react-icons/hi";

const SearchBar = () => {
  return (
    <div className="flexCenter search">
      <div className="flexCenter search-bar">
        <input
          placeholder="Search by title, city or country..."
          type="text"
          //   value={filter}
          //   onChange={(e) => setFilter(e.target.value)}
        />
        <button className="button">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
