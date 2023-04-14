import React from 'react';
import { FoodCard, Loader } from '@components/ui-kit';
import { useGetAllProductsQuery } from '@store/products';
import { IProductRequest } from '@store/products/models';

import './styles.scss';

export const FoodContainer: React.FC = () => {
  const { data = [], isLoading } = useGetAllProductsQuery();

  console.log(data);

  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="food-container">
          {data.map((product: IProductRequest) => {
            return <FoodCard product={product} key={product.id} />;
          })}
        </div>
      )}
    </div>
  );
};
