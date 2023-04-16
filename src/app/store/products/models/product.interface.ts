export interface IProduct {
  id: string;
  productName: string;
  productPrice: number;
  productDescription: string;
  productCategory: string;
  productCookingTime: number;
  productFavoritesCounter: number;
  picture: IAvatar;
}

export interface IAvatar {
  id: string;
  path: string;
}
