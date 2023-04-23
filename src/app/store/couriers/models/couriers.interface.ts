export interface ICouriers {
  id: string;
  couriersId: string;
  name: string;
  surname: string;
  email: number;
  phoneNumber: string;
  courierCity: string;
  deliveryTime: number;
  avatar: IAvatar;
}

export interface IAvatar {
  id: string;
  path: string;
}
