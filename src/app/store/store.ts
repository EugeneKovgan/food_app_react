import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { userReducer } from './users/models/auth-slice';
import { basketReducer } from './basket';
import { couriersApi } from './couriers';
import { productsApi } from './products';
import { authApi } from './users';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    user: persistedReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [couriersApi.reducerPath]: couriersApi.reducer,
    basket: basketReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({ serializableCheck: false }),
    authApi.middleware,
    productsApi.middleware,
    couriersApi.middleware,
  ],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
