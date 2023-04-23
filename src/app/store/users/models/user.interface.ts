import { InitialStateType } from '@store/basket';

export interface IUserRequest {
  id: string;
  userId: string;
  userName: string;
  email: string;
  name: string;
  surname: string;
  phoneNumber: string;
  avatar: IAvatar;
  address: IAddress;
  cardNumber: string[];
  favoritesProducts: string[];
  orderList: InitialStateType[] | [];
}

export interface IAvatar {
  id: string;
  path: string;
}

export interface IAddress {
  city: string;
  street: string;
}

export interface IUserResponse {
  user: IUserRequest | null;
  token: string;
}
