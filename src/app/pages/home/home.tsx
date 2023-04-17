import React, { useEffect, useState } from 'react';
import { Filter, Header, Search } from '@components/ui-kit';
import { FoodContainer } from '@pages/food-container';
import { useGetProductsQuery } from '@store/products';
import { IProduct } from '@store/products/models';

import './styles.scss';

export const Home: React.FC = () => {
  const { data, isLoading, isSuccess } = useGetProductsQuery('products');
  const [btnFilter, setBtnFilter] = useState<string>('fastFood');
  const [search, setSearch] = useState<string>('');
  // const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState<[]>([]);

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

  return (
    <div className="home-page">
      <Header />
      <Search search={search} setSearch={setSearch} />
      <Filter btnFilter={btnFilter} setBtnFilter={setBtnFilter} />
      <FoodContainer data={filteredData} isLoading={isLoading} />
    </div>
  );
};
