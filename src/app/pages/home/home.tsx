import React, { useEffect, useState } from 'react';
import { Filter, Header, Search } from '@components/ui-kit';
import { FoodContainer } from '@pages/food-container';
import { useGetProductsQuery } from '@store/products';
import { IProduct } from '@store/products/models';

import './styles.scss';

export const Home: React.FC = () => {
  const { data, isLoading, isSuccess } = useGetProductsQuery('products');
  const [btnFilter, setBtnFilter] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      setFilteredData(data);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isSuccess) {
      setFilteredData(
        data.filter((item: IProduct) => {
          return search.toLowerCase() === ''
            ? item
            : item.productName.toLowerCase().includes(search);
        }),
      );
    }
  }, [search]);

  useEffect(() => {
    if (isSuccess) {
      setFilteredData(
        data.filter((item: IProduct) => {
          return btnFilter.toLowerCase() === ''
            ? item
            : item.productCategory.toLowerCase().includes(btnFilter);
        }),
      );
    }
  }, [btnFilter]);

  return (
    <div className="home-page">
      <Header />
      <Search search={search} setSearch={setSearch} />
      <Filter setBtnFilter={setBtnFilter} />
      <FoodContainer data={filteredData} isLoading={isLoading} />
    </div>
  );
};
