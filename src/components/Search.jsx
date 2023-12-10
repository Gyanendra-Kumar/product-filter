import React from "react";

const Search = ({ inputValue, onInputChange }) => {
  return (
    <div>
      <input
        type="text"
        className="py-1 px-2 rounded-md"
        placeholder="Search Products"
        value={inputValue}
        onChange={onInputChange}
      />
    </div>
  );
};

export default Search;
