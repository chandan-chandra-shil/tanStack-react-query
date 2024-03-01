import React from "react";

const retrieveProduct = async () => {
  const response = await axios.get("http://localhost:3000/products");
  return response.data;
};
const ProductList = () => {
  return (
    <div>
      <h1 className="text-7xl">Product List </h1>
    </div>
  );
};

export default ProductList;
