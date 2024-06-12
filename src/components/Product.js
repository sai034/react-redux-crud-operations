import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct, updateProduct } from '../features/products/productSlice';
import axios from 'axios';

export default function Product(props) {
  const { product } = props;
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(product.title);

  // update a product
  const updateAProduct = async (title) => {
    try {
      const updateAProductResponse = await axios({
        method: 'put',
        url: 'https://dummyjson.com/products/1',
        data: {
          title: title
        }
        })
      console.log({updateAProductResponse})
    }catch(error) {
      console.log(error)
    }
  } 

  const handleDelete = async (productId) => {
    await deleteAProduct()
    dispatch(deleteProduct(productId))
  }

  // delete a product
  const deleteAProduct = async () => {
    try {
      const deleteAProductResponse = await axios({
        method: 'delete',
        url: 'https://dummyjson.com/products/1',
    
        })
      console.log({deleteAProductResponse})
    }catch(error) {
      console.log(error)
    }
  } 

  const saveProduct = async () => {
    const payload = {
      id: product.id,
      title: editValue,
    };
    updateAProduct(payload.title)
    dispatch(updateProduct(payload));
    cancelEdit();
  };

  const cancelEdit = () => {
    setIsEdit(false);
  };

  return isEdit ? (
    <form onSubmit={saveProduct}>
      <input
        type='text'
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
      />
      <button  className='rounded-full ml-8 bg-blue-500 w-12 p-2 text-white' type='submit'>Save</button>
      <button className='rounded-full ml-2 mt-2 bg-red-500 w-16 p-2 text-white'  onClick={cancelEdit}>Cancel</button>
    </form>
  ) : (
    <>
     {product.title}
   
  
      <button className='rounded-full mt-2 ml-4 bg-blue-500 w-12 p-2 text-white' onClick={() => setIsEdit(!isEdit)}>Edit</button>
    
      <button  className='rounded-full ml-4 bg-red-500 w-16 p-2 text-white' onClick={() => handleDelete(product.id)}>Delete</button>
   
 
    </>
  );
}
