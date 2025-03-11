// import { createSlice } from '@reduxjs/toolkit';

// import { getProductOperations, addNewProduct } from './search-operations';

// const initialState = {
//   items: [],
//   loading: false,
//   error: '',
//   message: '',
// };

// const getProductSlice = createSlice({
//   name: 'product',
//   initialState,
//   reducers: {
//     clearProduct: () => ({ ...initialState }),
//   },
//   extraReducers: {
//     [getProductOperations.pending]: (store, payload) => {
//       store.loading = true;
//       store.error = null;
//     },
//     [getProductOperations.fulfilled]: (store, { payload }) => {
//       store.loading = false;
//       store.items = payload;
//     },
//     [getProductOperations.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },
//     [addNewProduct.pending]: (store, payload) => {
//       store.loading = true;
//       store.error = null;
//       store.error = null;
//     },
//     [addNewProduct.fulfilled]: (store, { payload }) => {
//       store.loading = false;
//       store.message = payload.message;
//     },
//     [addNewProduct.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },
//   },
// });

// export default getProductSlice.reducer;

// export const { clearProduct } = getProductSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

import { getProductOperations, addNewProduct } from './search-operations';

const initialState = {
  items: [],
  loading: false,
  error: '',
  message: '',
};

const getProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    clearProduct: () => ({ ...initialState }),
  },
  extraReducers: builder => {
    builder
      //* getProductOperations
      .addCase(getProductOperations.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductOperations.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(getProductOperations.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      //* addNewProduct
      .addCase(addNewProduct.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addNewProduct.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.message = payload.message;
      })
      .addCase(addNewProduct.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default getProductSlice.reducer;

export const { clearProduct } = getProductSlice.actions;
