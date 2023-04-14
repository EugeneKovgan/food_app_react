export interface ICouriersRequest {
  id: string;
  name: string;
  email: number;
  phoneNumber: string;
  address: string;
  deliveryTime: number;
  avatar: IAvatar;
}

export interface IAvatar {
  id: string;
  path: string;
}
