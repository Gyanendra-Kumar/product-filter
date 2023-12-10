import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={`shadow-2xl bg-white rounded-md flex item-center justify-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
