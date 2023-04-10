import React from 'react';
import { Filter, Footer, Header, Search } from '@components/ui-kit';
import { FoodContainer } from '@pages/food-container';

import './styles.scss';

export const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Header />
      <Search />
      <Filter />
      <FoodContainer />
      <Footer />
    </div>
  );
};
