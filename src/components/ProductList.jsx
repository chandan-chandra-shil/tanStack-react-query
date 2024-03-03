import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const retrieveProducts = async () => {
  const response = await axios.get("http://localhost:3000/products");
  return response.data;
};
const ProductList = () => {
  const {data : products ,error,isLoading}=useQuery({
    queryKey: ['products'],
    queryFn:retrieveProducts,
  })

  if (isLoading) return <div>Fetching products ...</div>
  if (error) return <div>An error occured:{error.message}</div>
  return (
    <div className="flex flex-col  justify-center items-center w3/5">
      <h2 className="text-3xl my-2"> Product List </h2>
      <ul>
        {
          products && products.map(product =>
            <li key={product?.id}>
              <img src={product?.thumbnail} alt={product?.title} />
              <p>{product?.title}</p>
            </li>)
        }
      </ul>
    </div>
  ); 
};

export default ProductList;
