import React, { useState } from 'react';
import { Empty } from 'antd';
import { FoodCard, FullFoodCard, Loader } from '@components/ui-kit';
import { IProduct } from '@store/products/models';

import './styles.scss';

type PropsType = {
  data: IProduct[];
  isLoading: boolean;
};

export const FoodContainer: React.FC<PropsType> = ({ data, isLoading }) => {
  const [fullCard, setFullCard] = useState<boolean>(false);
  const [currentProduct, setCurrentProduct] = useState<IProduct | any>();

  return fullCard ? (
    <FullFoodCard setFullCard={setFullCard} product={currentProduct} />
  ) : (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="food-container">
          {data.length > 0 ? (
            data.map((product: IProduct) => {
              return (
                <FoodCard
                  product={product}
                  key={product.id}
                  setFullCard={setFullCard}
                  setCurrentProduct={setCurrentProduct}
                />
              );
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
