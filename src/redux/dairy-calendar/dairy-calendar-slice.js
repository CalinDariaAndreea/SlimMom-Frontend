// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   date: '',
//   productId: '',
//   weight: null,
// };

// const dairyCalendarSlice = createSlice({
//   name: 'postEatenProduct',
//   initialState,
//   reducers: {
//     addDate: (store, { payload }) => {
//       store.date = payload;
//     },
//     addProductId: (store, { payload }) => {
//       store.productId = payload;
//     },
//     addWeight: (store, { payload }) => {
//       store.weight = payload;
//     },
//     clearData: () => ({ ...initialState }),
//   },
// });

// export default dairyCalendarSlice.reducer;

// export const { addDate, addProductId, addWeight, clearData } =
//   dairyCalendarSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  date: '',
  productId: '',
  weight: null,
};

const dairyCalendarSlice = createSlice({
  name: 'postEatenProduct',
  initialState,
  reducers: {
    addDate: (state, { payload }) => {
      state.date = payload;
    },
    addProductId: (state, { payload }) => {
      state.productId = payload;
    },
    addWeight: (state, { payload }) => {
      state.weight = payload;
    },
    clearData: () => ({ ...initialState }),
  },
});

export default dairyCalendarSlice.reducer;

export const { addDate, addProductId, addWeight, clearData } =
  dairyCalendarSlice.actions;
