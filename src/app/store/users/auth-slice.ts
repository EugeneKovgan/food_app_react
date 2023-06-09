/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsForRegex": ["^state"] }] */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store/store';
import { authApi } from './auth-api';
import { IUserRequest, IUserResponse } from './models';

const initialState: IUserResponse = {
  user: null,
  token: '',
};

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    logout: state => {
      state.user = null;
      state.token = '';
    },
    setUser: (state, action: PayloadAction<IUserRequest>) => {
      state.user = { ...state.user, ...action.payload };
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addMatcher(
        authApi.endpoints.loginUser.matchFulfilled,
        (state, { payload: { token } }) => {
          state.token = token;
        },
      )
      .addMatcher(
        authApi.endpoints.createUser.matchFulfilled,
        (state, { payload: { token } }) => {
          state.token = token;
        },
      )
      .addMatcher(
        authApi.endpoints.getCurrentUser.matchFulfilled,
        (state, { payload: { user } }) => {
          state.user = user;
        },
      );
  },
});

export const selectAuth = (state: RootState) => state.user;
export const selectAuthToken = (state: RootState) => state.user.token;
export const selectAuthUser = (state: RootState) => state.user.user;

export const userReducer = userSlice.reducer;

export const { logout, setUser, setToken } = userSlice.actions;
