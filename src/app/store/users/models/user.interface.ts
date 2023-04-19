export interface IUserRequest {
  id: string;
  userId: string;
  userName: string;
  email: string;
  name: string;
  surname: string;
  phoneNumber: string;
  avatar: IAvatar;
  address: string;
  cardNumber: string[];
  favoritesProducts: string[];
}

export interface IAvatar {
  id: string;
  path: string;
}

export interface IUserResponse {
  user: IUserRequest | null;
  token: string;
}
