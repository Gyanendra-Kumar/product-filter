import React from "react";

const Search = ({ inputValue, onInputChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Products"
        className="rounded-md py-1 px-3"
        value={inputValue}
        onChange={onInputChange}
      />
    </div>
  );
};

export default Search;
