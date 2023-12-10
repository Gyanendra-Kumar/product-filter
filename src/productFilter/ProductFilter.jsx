import React, { useEffect, useState } from "react";
import Search from "./Search";
import Categories from "./Categories";
import { products } from "../products-data";
import SingleProduct from "./SingleProduct";

const allCategories = [
  "all",
  ...new Set(products.map((product) => product.category)),
];

const ProductFilter = () => {
  const [featuredProducts, setFeaturedProducts] = useState(products);
  const [search, setSearch] = useState("");
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [categories, setCategories] = useState(allCategories);
  console.log(categories);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setFilteredProduct(
      featuredProducts.filter(
        (product) =>
          product.title &&
          product.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [featuredProducts, search]);

  const filteredCategory = (category) => {
    if (category === "all") {
      setFeaturedProducts(products);
      return;
    }

    const newFilteredProduct = products.filter(
      (product) => product.category === category
    );

    setFeaturedProducts(newFilteredProduct);
  };

  return (
    <>
      <div className="bg-slate-400">
        <div className="max-w-7xl mx-auto flex items-center flex-col py-4 gap-2">
          <div className="text-2xl">
            <span className="text-red-400">Product</span> Filter
          </div>
          <div className="flex justify-around w-full px-6">
            <Search inputValue={search} onInputChange={handleChange} />
            <Categories
              categories={categories}
              filterItems={filteredCategory}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 grid grid-cols-4 gap-4 max-sm:grid-cols-1 max-lg:grid-cols-2">
        {filteredProduct.length === 0 ? (
          <h1>No product Found!</h1>
        ) : (
          filteredProduct.map((product) => {
            // console.log(product);
            return <SingleProduct key={product.id} {...product} />;
          })
        )}
      </div>
    </>
  );
};

export default ProductFilter;
