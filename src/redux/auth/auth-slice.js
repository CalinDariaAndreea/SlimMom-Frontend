// import { createSlice } from '@reduxjs/toolkit';
// import { register, login, logout, refresh, getUser } from './auth-operations';

// const initialState = {
//   user: {},
//   todaySummary: {},
//   sid: '',
//   accessToken: '',
//   refreshToken: '',
//   isLogin: false,
//   loading: false,
//   isRefreshing: false,
//   error: null,
//   newUser: {},
// };

// const accessAuth = (store, payload) => {
//   store.loading = false;
//   store.isLogin = true;
//   store.user = payload.user;
//   store.sid = payload.sid;
//   store.accessToken = payload.accessToken;
//   store.refreshToken = payload.refreshToken;
// };

// const auth = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     clearNewUser: store => {
//       store.newUser = {};
//     },
//     clearUser: () => ({ ...initialState }),
//   },

//   extraReducers: {
//     // * REGISTER
//     [register.pending]: store => {
//       store.loading = true;
//       store.error = null;
//     },
//     [register.fulfilled]: (store, { payload }) => {
//       store.loading = false;
//       store.isLogin = false;
//       store.newUser = payload;
//       store.user = { ...store.user };
//       store.sid = '';
//       store.accessToken = '';
//       store.refreshToken = '';
//     },
//     [register.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload.data.message;
//     },
//     // * LOGIN
//     [login.pending]: store => {
//       store.loading = true;
//       store.error = null;
//     },
//     [login.fulfilled]: (store, { payload }) => accessAuth(store, payload),
//     [login.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload.data.message;
//     },
//     // * LOGOUT
//     [logout.pending]: store => {
//       store.loading = true;
//       store.error = null;
//       store.isRefreshing = true;
//     },
//     [logout.fulfilled]: store => {
//       store.user = {};
//       store.todaySummary = {};
//       store.sid = '';
//       store.accessToken = '';
//       store.refreshToken = '';
//       store.isLogin = false;
//       store.loading = false;
//       store.isRefreshing = true;
//       store.error = null;
//       store.newUser = {};
//     },
//     [logout.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },
//     // * REFRESH
//     [refresh.pending]: store => {
//       store.loading = true;
//       store.error = null;
//       store.isRefreshing = true;
//     },
//     [refresh.fulfilled]: (store, { payload }) => {
//       store.loading = false;
//       store.sid = payload.sid;
//       store.accessToken = payload.newAccessToken;
//       store.refreshToken = payload.newRefreshToken;
//       store.isRefreshing = false;
//     },
//     [refresh.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.isLogin = false;
//       store.error = payload;
//       store.isRefreshing = true;
//     },
//     // * GET USER
//     [getUser.pending]: store => {
//       store.loading = true;
//       store.error = null;
//     },
//     [getUser.fulfilled]: (store, { payload }) => {
//       store.isLogin = true;
//       store.loading = false;
//       store.user = payload;
//     },
//     [getUser.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },
//   },
// });

// export default auth.reducer;
// export const { clearNewUser, clearUser } = auth.actions;

import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refresh, getUser } from './auth-operations';

const initialState = {
  user: {},
  todaySummary: {},
  sid: '',
  accessToken: '',
  refreshToken: '',
  isLogin: false,
  loading: false,
  isRefreshing: false,
  error: null,
  newUser: {},
};

const accessAuth = (store, payload) => {
  store.loading = false;
  store.isLogin = true;
  store.user = payload.user;
  store.sid = payload.sid;
  store.accessToken = payload.accessToken;
  store.refreshToken = payload.refreshToken;
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearNewUser: state => {
      state.newUser = {};
    },
    clearUser: () => ({ ...initialState }),
  },
  extraReducers: builder => {
    builder
      // * REGISTER
      .addCase(register.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isLogin = false;
        state.newUser = payload;
        state.user = { ...state.user };
        state.sid = '';
        state.accessToken = '';
        state.refreshToken = '';
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      })

      // * LOGIN
      .addCase(login.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) =>
        accessAuth(state, payload)
      )
      .addCase(login.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      })

      // * LOGOUT
      .addCase(logout.pending, state => {
        state.loading = true;
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(logout.fulfilled, state => {
        state.user = {};
        state.todaySummary = {};
        state.sid = '';
        state.accessToken = '';
        state.refreshToken = '';
        state.isLogin = false;
        state.loading = false;
        state.isRefreshing = true;
        state.error = null;
        state.newUser = {};
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      // * REFRESH
      .addCase(refresh.pending, state => {
        state.loading = true;
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.sid = payload.sid;
        state.accessToken = payload.newAccessToken;
        state.refreshToken = payload.newRefreshToken;
        state.isRefreshing = false;
      })
      .addCase(refresh.rejected, (state, { payload }) => {
        state.loading = false;
        state.isLogin = false;
        state.error = payload;
        state.isRefreshing = true;
      })

      // * GET USER
      .addCase(getUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.isLogin = true;
        state.loading = false;
        state.user = payload;
      })
      .addCase(getUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default auth.reducer;
export const { clearNewUser, clearUser } = auth.actions;
