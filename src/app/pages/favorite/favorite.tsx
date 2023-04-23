/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  FavoriteTitle,
  Filter,
  FreeDelivery,
  Header,
  Search,
} from '@components/ui-kit';
import { useAppSelector } from '@core/hooks';
import { guard } from '@core/utils';
import { FoodContainer } from '@pages/food-container';
import { useGetProductsQuery } from '@store/products';
import { IProduct } from '@store/products/models';

import './styles.scss';

const Favorite: React.FC = () => {
  const { data, isLoading, isSuccess } = useGetProductsQuery('products');
  const currentUser = useAppSelector(state => state.user.user);
  const [favoriteList, setFavoriteList] = useState(
    currentUser?.favoritesProducts,
  );
  const [btnFilter, setBtnFilter] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [favoriteData, setFavoriteData] = useState<any>([]);
  const [filteredData, setFilteredData] = useState<any>([]);

  useEffect(() => {
    if (isSuccess && favoriteList) {
      setFavoriteData(
        data.filter((product: IProduct) => favoriteList.includes(product.id)),
      );
      setFilteredData(favoriteData);
    }
  }, [data]);

  useEffect(() => {
    if (isSuccess) {
      setFilteredData(
        favoriteData.filter((item: IProduct) => {
          return search.toLowerCase() === ''
            ? item
            : item.productName.toLowerCase().includes(search);
        }),
      );
    }
  }, [search]);

  useEffect(() => {
    setFilteredData(favoriteData);
  }, [favoriteData]);

  useEffect(() => {
    if (isSuccess) {
      setFilteredData(
        favoriteData.filter((item: IProduct) => {
          return btnFilter.toLowerCase() === ''
            ? item
            : item.productCategory.toLowerCase().includes(btnFilter);
        }),
      );
    }
  }, [btnFilter]);

  return (
    <div className="favorite-page">
      <Header />
      <Search search={search} setSearch={setSearch} />
      <Filter setBtnFilter={setBtnFilter} />
      <FreeDelivery />
      <FavoriteTitle />
      <FoodContainer data={filteredData} isLoading={isLoading} />
    </div>
  );
};

export const FavoriteGuard = guard(Favorite);
