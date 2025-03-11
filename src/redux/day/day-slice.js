// import { createSlice } from '@reduxjs/toolkit';
// import {
//   postEatenProduct,
//   deleteEatenProduct,
//   getInfoByDay,
//   getInfoByPeriod,
//   getEatenProduct,
// } from './day-operations';

// const initialState = {
//   day: {},
//   daySummary: {},
//   periodSummary: {},
//   eatenProduct: {},
//   eatenProducts: [],
//   loading: false,
//   error: null,
// };

// const daySlice = createSlice({
//   name: 'day',
//   initialState,
//   reducers: {
//     clearDay: () => ({ ...initialState }),
//   },
//   extraReducers: {
//     //* getDay
//     [postEatenProduct.pending]: store => {
//       store.loading = true;
//       store.error = null;
//     },
//     [postEatenProduct.fulfilled]: (store, { payload }) => {
//       store.day = payload.day;
//       store.daySummary = payload.daySummary;
//       store.eatenProduct = payload.eatenProduct;
//       store.loading = false;
//       store.summary = payload;
//     },
//     [postEatenProduct.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },
//     //* getEatenProduct
//     [getEatenProduct.pending]: store => {
//       store.loading = true;
//       store.error = null;
//     },
//     [getEatenProduct.fulfilled]: (store, { payload }) => {
//       store.day = payload.day;
//       store.daySummary = payload.daySummary;
//       store.eatenProduct = payload.eatenProduct;
//       store.loading = false;
//       store.summary = payload;
//     },
//     [getEatenProduct.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },
//     //* deleteDay
//     [deleteEatenProduct.pending]: store => {
//       store.loading = true;
//       store.error = null;
//     },
//     [deleteEatenProduct.fulfilled]: (store, { payload }) => {
//       store.daySummary = payload.newDaySummary;
//       store.loading = false;
//     },
//     [deleteEatenProduct.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },
//     //* getInfoAboutDay
//     [getInfoByDay.pending]: store => {
//       store.loading = true;
//       store.error = null;
//     },
//     [getInfoByDay.fulfilled]: (store, { payload }) => {
//       store.eatenProducts = payload.eatenProducts;
//       store.loading = false;
//       store.aboutDay = payload;
//     },
//     [getInfoByDay.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },
//     //* getInfoAboutPeriod
//     [getInfoByPeriod.pending]: store => {
//       store.loading = true;
//       store.error = null;
//     },
//     [getInfoByPeriod.fulfilled]: (store, { payload }) => {
//       store.loading = false;
//       store.periodSummary = payload;
//     },
//     [getInfoByPeriod.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },
//   },
// });

// export default daySlice.reducer;

// export const { clearDay } = daySlice.actions;

import { createSlice } from '@reduxjs/toolkit';
import {
  postEatenProduct,
  deleteEatenProduct,
  getInfoByDay,
  getInfoByPeriod,
  getEatenProduct,
} from './day-operations';

const initialState = {
  day: {},
  daySummary: {},
  periodSummary: {},
  eatenProduct: {},
  eatenProducts: [],
  loading: false,
  error: null,
};

const daySlice = createSlice({
  name: 'day',
  initialState,
  reducers: {
    clearDay: () => ({ ...initialState }),
  },
  extraReducers: builder => {
    builder
      //* postEatenProduct
      .addCase(postEatenProduct.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postEatenProduct.fulfilled, (state, { payload }) => {
        state.day = payload.day;
        state.daySummary = payload.daySummary;
        state.eatenProduct = payload.eatenProduct;
        state.loading = false;
        state.summary = payload;
      })
      .addCase(postEatenProduct.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      //* getEatenProduct
      .addCase(getEatenProduct.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEatenProduct.fulfilled, (state, { payload }) => {
        state.day = payload.day;
        state.daySummary = payload.daySummary;
        state.eatenProduct = payload.eatenProduct;
        state.loading = false;
        state.summary = payload;
      })
      .addCase(getEatenProduct.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      //* deleteEatenProduct
      .addCase(deleteEatenProduct.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteEatenProduct.fulfilled, (state, { payload }) => {
        state.daySummary = payload.newDaySummary;
        state.loading = false;
      })
      .addCase(deleteEatenProduct.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      //* getInfoByDay
      .addCase(getInfoByDay.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getInfoByDay.fulfilled, (state, { payload }) => {
        state.eatenProducts = payload.eatenProducts;
        state.loading = false;
        state.aboutDay = payload;
      })
      .addCase(getInfoByDay.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      //* getInfoByPeriod
      .addCase(getInfoByPeriod.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getInfoByPeriod.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.periodSummary = payload;
      })
      .addCase(getInfoByPeriod.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default daySlice.reducer;

export const { clearDay } = daySlice.actions;
