import React, { FC } from 'react';
import { FreeDelivery, Header, Loader } from '@components/ui-kit';
import { Filter } from '@components/ui-kit/filter';
import { Search } from '@components/ui-kit/search';
import { FoodContainer } from '@pages/food-container';
// import { Outlet } from 'react-router-dom';

export const MainLayout: FC = () => {
  return (
    <div>
      <Header />
      <Search />
      <Filter />
      <Loader />
      <FreeDelivery />
      {/* <FoodCard /> */}
      <FoodContainer />
    </div>
    // <Outlet />
  );
};
