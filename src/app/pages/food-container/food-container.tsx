import React from 'react';
import { Empty } from 'antd';
import { FoodCard, Loader } from '@components/ui-kit';
import { IProduct } from '@store/products/models';

import './styles.scss';

type PropsType = { data: IProduct[]; isLoading: boolean };

export const FoodContainer: React.FC<PropsType> = ({ data, isLoading }) => {
  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="food-container">
          {data.length > 0 ? (
            data.map((product: IProduct) => {
              return <FoodCard product={product} key={product.id} />;
            })
          ) : (
            <div className="food-container__empty-search">
              <Empty description={false} />
              <p>Nothing found !</p>
              <p>Check your filter</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
