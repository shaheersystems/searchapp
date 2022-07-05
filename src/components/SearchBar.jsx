import React from "react";

function SearchBar(props) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter keyword"
        onChange={props.inputHandler}
      />
    </div>
  );
}

export default SearchBar;
