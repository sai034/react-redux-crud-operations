import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/products/productSlice';
import axios from "axios"

export default function AddProduct() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const addProductHandler = async (event) => {
    event.preventDefault();
    const response = await createAProduct()
    const { id, title } = response
    dispatch(addProduct({id, title}));
    setTitle('');
  };

  const createAProduct = async () => {
    try {
      const createProductResponse = await axios({
      method: 'post',
      url: 'https://dummyjson.com/products/add',
      data: {
        title: title
      }
      })
      console.log({createProductResponse})
      return createProductResponse.data
    }catch(error) {
      console.log(error)
    }
  } 

  return (
 

    <form onSubmit={addProductHandler} className=''>
      <div className='flex flex-row justify-center'>
      <input
        type='text'
        className='ml-12 border border-black-900'
        value={title}
        placeholder='  Enter the title'
        onChange={(e) => setTitle(e.target.value)}
      />

      <button className='rounded-full ml-2 bg-indigo-500 w-32 p-2 text-white'>Add Product</button>

    </div>
    </form>
    
   
  );
}
