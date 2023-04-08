import React from 'react';
import shopping_bag from 'assets/images/png/image_shopping_app.png';

import './styles.scss';

export const FreeDelivery: React.FC = () => {
  return (
    <div className="container">
      <div className="free-delivery">
        <img src={shopping_bag} alt="shopping_bag" />
        <div className="free-delivery__description-block">
          <div className="free-delivery__description-block__header">
            <div className="free-delivery__description-block__header__title">
              Free delivery
            </div>
            <div className="free-delivery__description-block__header__date">
              May 10 - June 21
            </div>
          </div>
          <button
            className="free-delivery__description-block__btn"
            type="button"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};
