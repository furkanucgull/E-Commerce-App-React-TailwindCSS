import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  selectedProduct: {},
  loading: false,
  searchTerm: '',
};

const base_url = 'https://fakestoreapi.com';

export const getAllProducts = createAsyncThunk('getAllProducts', async () => {
  const response = await axios.get(`${base_url}/products`);
  return response.data;
});

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getAllProducts.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
  },
});
export const { setSelectedProduct, setSearchTerm } = productSlice.actions;

export default productSlice.reducer;
