import React from "react";
import Card from "./Card";

const SingleProduct = ({ id, title, img, category, price }) => {
  return (
    <Card className="flex flex-col h-full">
      <img src={img} alt={title} className="m-4 object-cover" />
      <div className="bg-blue-500 py-4 rounded-b-md flex flex-col justify-center items-center gap-3">
        <p className="text-white text-2xl font-semibold">{title}</p>
        <div className="flex justify-between items-center w-full px-8">
          <p className="text-white text-lg">{price}</p>
          <button className="bg-red-400 text-white py-2 px-4 rounded-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </Card>
  );
};

export default SingleProduct;
