/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsForRegex": ["^state"] }] */
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { IProduct } from '@store/products/models';
import { RootState } from '../store';

export interface InitialStateType extends IProduct {
  quantity: number;
}

interface BasketType {
  basket: InitialStateType[];
}

const initialState: BasketType = {
  basket: [],
};

const counterSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const currentGoods = state.basket.find(
        ({ ...item }: InitialStateType) => {
          return item.id === action.payload.id;
        },
      );

      if (currentGoods) {
        currentGoods.quantity += 1;
      } else {
        state.basket.push({ ...action.payload, quantity: 1 });
      }
    },

    increaseQuantity: (state, action) => {
      const currentGoods = state.basket.findIndex(
        ({ ...item }: InitialStateType) => item.id === action.payload,
      );

      state.basket[currentGoods] = {
        ...state.basket[currentGoods],
        quantity: state.basket[currentGoods].quantity + 1,
      };
    },

    decreaseQuantity: (state, action) => {
      const currentGoods = state.basket.findIndex(
        ({ ...item }: InitialStateType) => item.id === action.payload,
      );

      state.basket[currentGoods] = {
        ...state.basket[currentGoods],

        quantity:
          state.basket[currentGoods].quantity >= 2
            ? state.basket[currentGoods].quantity - 1
            : state.basket[currentGoods].quantity,
      };
    },

    removeGoods: (state, action) => {
      state.basket = state.basket.filter(({ ...item }: InitialStateType) => {
        return item.id !== action.payload;
      });
    },

    clearBasket: () => {
      return initialState;
    },
  },
});

export const {
  addToBasket,
  increaseQuantity,
  decreaseQuantity,
  removeGoods,
  clearBasket,
} = counterSlice.actions;
export const basketReducer = counterSlice.reducer;

export const store = configureStore({
  reducer: counterSlice.reducer,
});

export const getGoodsInBasket = (state: RootState) => state.basket.basket;
