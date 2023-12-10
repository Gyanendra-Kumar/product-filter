import React, { useEffect, useState } from "react";
import Search from "./Search";
import Categories from "./Categories";
import Product from "./Product";
import { products } from "../products-data";

const allCategories = [
  "all",
  ...new Set(products.map((product) => product.category)),
];

const ProductList = () => {
  const [productItems, setProductItems] = useState(products);
  const [search, setSearch] = useState("");
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [categories, setCategories] = useState(allCategories);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // USED TO SEARCH PRODUCTS
  useEffect(() => {
    setFilteredProduct(
      productItems.filter(
        (product) =>
          product.title &&
          product.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, productItems]);

  // USED TO FILTER PRODUCTS USING CATEGORY
  const filterCategoryProduct = (category) => {
    if (category === "all") {
      setProductItems(products);
      return;
    }

    const newProducts = products.filter(
      (product) => product.category === category
    );

    setProductItems(newProducts);
  };
  //   console.log(productCategories);

  return (
    <>
      <div className="w-full bg-slate-200 py-4">
        <header className="mx-auto flex items-center h-full flex-col gap-2 justify-center">
          <h1 className="uppercase font-semibold text-xl">
            <span className="text-[#4c1a10] ">Product</span> Filter
          </h1>
          <div className="flex justify-evenly w-full max-md:flex-row">
            <Search inputValue={search} onInputChange={handleSearch} />
            <Categories
              categories={categories}
              filterItems={filterCategoryProduct}
            />
          </div>
        </header>
      </div>

      <div>
        <div className="max-w-7xl mx-auto py-8 grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 px-4 gap-4">
          {filteredProduct.length === 0 ? (
            <h3>No Product found!</h3>
          ) : (
            filteredProduct.map((product) => {
              return <Product {...product} key={product.id} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
