import React from 'react';
import { FoodCard } from '@components/ui-kit';

import './styles.scss';

export const FoodContainer: React.FC = () => {
  return (
    <div className="container">
      <div className="food-container">
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>
    </div>
  );
};
