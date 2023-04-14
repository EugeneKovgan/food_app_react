export interface IUserRequest {
  id: string;
  userName: string;
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  address: string;
  cardNumber: string[];
  password: string;
  avatar: IAvatar;
}

export interface IAvatar {
  id: string;
  path: string;
}

export interface IUserResponse {
  user: IUserRequest | null;
  token: string;
}
