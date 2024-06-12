import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from './Product';
import axios from "axios"
import { addProducts } from '../features/products/productSlice';


export default function Products() {
  
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch()

  useEffect(() => {
    getAllProducts()
  }, [])

  // get all products
  const getAllProducts = async () => {
    try {
      const GetAllProductsResponse = await axios.get("https://dummyjson.com/products") 
      console.log({GetAllProductsResponse})
      dispatch(addProducts(GetAllProductsResponse.data.products))
      // setProducts(GetAllProductsResponse.data.products)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <ul className='text-center'>
        {products.map((product) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
    
    </ul>
    </div>
  );
}
