import React from "react";
import Card from "./card";

const SingleProduct = ({ id, title, category, price, img }) => {
  return (
    <Card className="flex items-center justify-center flex-col pt-2">
      <img src={img} />
      <div className="bg-blue-400 w-full py-4 flex flex-col justify-center items-center gap-2 rounded-b-md">
        <h1 className="text-white text-xl font-semibold">{title}</h1>
        <div className="flex justify-between items-center w-full px-4">
          <p>{price}</p>
          <button className="bg-slate-200 py-2 px-4 rounded-md">
            Add to Cart
          </button>
        </div>
      </div>
    </Card>
  );
};

export default SingleProduct;
