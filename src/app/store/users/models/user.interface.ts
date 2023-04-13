export interface IUserRequest {
  id: string;
  userName: string;
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  address: string;
  avatar: any;
  cardNumber: string[];
  password: string;
}

export interface IUserResponse {
  user: IUserRequest | null;
  token: string;
}
