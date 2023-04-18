export interface IUserRequest {
  id: string;
  userName: string;
  email: string;
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

// export interface IUserFull {
//   userName: string;
//   name: string;
//   surname: string;
//   email: string;
//   phoneNumber: string;
//   address: string;
//   avatar: IAvatar;
//   cardNumber: string[];
//   favoritesProducts: string[];
//   password: string;
// }
