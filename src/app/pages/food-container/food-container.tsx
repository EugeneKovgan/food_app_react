import React, { useRef } from 'react';
// import { CSSTransition } from 'react-transition-group';
import { Empty } from 'antd';
import { FoodCard, Loader } from '@components/ui-kit';
import { IProduct } from '@store/products/models';

import './styles.scss';

type PropsType = {
  data: IProduct[];
  isLoading: boolean;
  // animation: boolean
};

export const FoodContainer: React.FC<PropsType> = ({
  data,
  isLoading,
  // animation,
}) => {
  const nodeRef = useRef(null);

  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        // <CSSTransition in={animation} timeout={500} classNames="my-node">
        <div className="food-container" ref={nodeRef}>
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
        // </CSSTransition>
      )}
    </div>
  );
};
