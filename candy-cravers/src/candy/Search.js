import React from "react";

function Search({ search, onSearch }) {
  return (
    <div>
      <input
        type="text"
        id="search"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      ></input>
    </div>
  );
}

export default Search;
