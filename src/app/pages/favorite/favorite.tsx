/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  FavoriteTitle,
  // Filter,
  FreeDelivery,
  Header,
  // Search,
} from '@components/ui-kit';
import { useAppSelector } from '@core/hooks';
import { FoodContainer } from '@pages/food-container';
import { useGetProductsQuery } from '@store/products';
import { IProduct } from '@store/products/models';

import './styles.scss';

export const Favorite: React.FC = () => {
  const { data, isLoading, isSuccess } = useGetProductsQuery('products');
  const currentUser = useAppSelector(state => state.user.user);
  const [favoriteList, setFavoriteList] = useState(
    currentUser?.favoritesProducts,
  );
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (isSuccess && currentUser) {
      setFilteredData(
        data.filter((prod: IProduct) => {
          return favoriteList?.filter((favorite: string) => {
            return favorite === prod.id ? prod : '';
          });
        }),
      );
    }
  }, [data]);

  // console.log(filteredData);

  return (
    <div className="favorite-page">
      <Header />
      {/* <Search /> */}
      {/* <Filter /> */}
      <FreeDelivery />
      <FavoriteTitle />
      <FoodContainer data={filteredData} isLoading={isLoading} />
    </div>
  );
};
