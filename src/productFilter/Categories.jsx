import React from "react";

const Categories = ({ categories, filterItems }) => {
  const handleCategoryChange = (e) => {
    filterItems(e.target.value);
  };

  return (
    <form>
      <label htmlFor="product">Choose your category: </label>
      <select
        name="product"
        id="product"
        onChange={handleCategoryChange}
        className="p-1 capitalize w-[100px]"
      >
        {categories.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Categories;
