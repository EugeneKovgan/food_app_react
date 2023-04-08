import React, { FC } from 'react';
import { Header } from '@components/ui-kit';
import { Filter } from '@components/ui-kit/filter';
import { Search } from '@components/ui-kit/search';
// import { Outlet } from 'react-router-dom';

export const MainLayout: FC = () => {
  return (
    <div>
      <Header />
      <Search />
      <Filter />
    </div>
    // <Outlet />
  );
};
