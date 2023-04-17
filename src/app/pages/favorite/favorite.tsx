import React from 'react';
import {
  FavoriteTitle,
  // Filter,
  FreeDelivery,
  Header,
  // Search,
} from '@components/ui-kit';

import './styles.scss';

export const Favorite: React.FC = () => {
  return (
    <div className="favorite-page">
      <Header />
      {/* <Search /> */}
      {/* <Filter /> */}
      <FreeDelivery />
      <FavoriteTitle />
    </div>
  );
};
