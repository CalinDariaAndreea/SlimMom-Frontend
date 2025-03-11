// import { createSlice } from '@reduxjs/toolkit';
// import { dailyRateInfo, dailyRateUser } from './daily-rate-operations';

// const initialState = {
//   id: '',
//   dailyRate: null,
//   summaries: [],
//   notAllowedProducts: [],
//   loading: false,
//   error: null,
// };

// const dailyRateSlice = createSlice({
//   name: 'dailyRate',
//   initialState,
//   reducers: {
//     clearDailyRate: () => ({ ...initialState }),
//   },
//   extraReducers: {
//     [dailyRateInfo.pending]: store => {
//       store.loading = true;
//       store.error = null;
//     },
//     [dailyRateInfo.fulfilled]: (store, { payload }) => {
//       store.loading = false;
//       store.dailyRate = payload.dailyRate;
//       store.userDataDailyRate = payload.userDateDailyRate;
//       store.notAllowedProducts = payload.notAllowedProducts;
//     },
//     [dailyRateInfo.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload.data.message;
//     },

//     [dailyRateUser.pending]: store => {
//       store.loading = true;
//       store.error = null;
//     },
//     [dailyRateUser.fulfilled]: (store, { payload }) => {
//       store.loading = false;
//       store.id = payload.id;
//       store.dailyRate = payload.dailyRate;
//       store.summaries = payload.summaries;
//       store.notAllowedProducts = payload.notAllowedProducts;
//     },
//     [dailyRateUser.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload.message;
//     },
//   },
// });

// export default dailyRateSlice.reducer;

// export const { clearDailyRate } = dailyRateSlice.actions;

import { createSlice } from '@reduxjs/toolkit';
import { dailyRateInfo, dailyRateUser } from './daily-rate-operations';

const initialState = {
  id: '',
  dailyRate: null,
  summaries: [],
  notAllowedProducts: [],
  loading: false,
  error: null,
};

const dailyRateSlice = createSlice({
  name: 'dailyRate',
  initialState,
  reducers: {
    clearDailyRate: () => ({ ...initialState }),
  },
  extraReducers: builder => {
    builder
      // * DAILY RATE INFO
      .addCase(dailyRateInfo.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(dailyRateInfo.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.dailyRate = payload.dailyRate;
        state.userDataDailyRate = payload.userDateDailyRate;
        state.notAllowedProducts = payload.notAllowedProducts;
      })
      .addCase(dailyRateInfo.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      })

      // * DAILY RATE USER
      .addCase(dailyRateUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(dailyRateUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.id = payload.id;
        state.dailyRate = payload.dailyRate;
        state.summaries = payload.summaries;
        state.notAllowedProducts = payload.notAllowedProducts;
      })
      .addCase(dailyRateUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.message;
      });
  },
});

export default dailyRateSlice.reducer;

export const { clearDailyRate } = dailyRateSlice.actions;
