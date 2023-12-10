import React from "react";

const Categories = ({ categories, filterItems }) => {
  const handleCategoryChange = (e) => {
    filterItems(e.target.value);
  };

  return (
    <>
      <div>
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              key={index}
              onClick={() => filterItems(category)}
              className="p-2 capitalize"
            >
              {category}
            </button>
          );
        })}
      </div>
      <form>
        <label htmlFor="product">Choose a category: </label>
        <select
          name="product"
          id="product"
          className="w-[150px] capitalize"
          onChange={handleCategoryChange}
        >
          {categories.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </form>
    </>
  );
};

export default Categories;
