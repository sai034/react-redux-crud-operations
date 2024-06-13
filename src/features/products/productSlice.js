import { createSlice } from '@reduxjs/toolkit';

// state: {
//   products: [{},{}],
// }

export const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      const product = {
        id: action.payload.id,
        title: action.payload.title,
      };

      return [...state, product];
    },

    addProducts: (state, action) => {
      console.log(action.payload)
      // state.products = action.payload
      return action.payload
    },

    updateProduct: (state, action) => {
      const { id, title } = action.payload;

      const product = state.find((product) => product.id === id);
      product.title = title;
    },
    deleteProduct: (state, action) => {
      // return state.filter((product) => product.id !== action.payload);
      return state.filter((product) => {
        return product.id !== action.payload
      })
    },
  },
});

export const { addProduct, updateProduct, deleteProduct, addProducts } = productsSlice.actions;

export default productsSlice.reducer;

