import React from 'react';
import {
  FavoriteTitle,
  Filter,
  // Footer,
  FreeDelivery,
  Header,
  Search,
} from '@components/ui-kit';
import { FoodContainer } from '@pages/food-container';

import './styles.scss';

export const Favorite: React.FC = () => {
  return (
    <div className="favorite-page">
      <Header />
      <Search />
      <Filter />
      <FreeDelivery />
      <FavoriteTitle />
      <FoodContainer />
    </div>
  );
};
