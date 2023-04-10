import React from 'react';

import './styles.scss';

export const Favorite: React.FC = () => {
  return (
    <div className="container">
      <div className="favorite">
        <div className="favorite__title">Your Favorite</div>
        <button className="favorite__btn" type="button">
          See more
        </button>
      </div>
    </div>
  );
};
