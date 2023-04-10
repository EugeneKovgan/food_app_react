import React from 'react';
import bell from 'assets/images/icons/bell.svg';
import book from 'assets/images/icons/book.svg';
import home from 'assets/images/icons/home.svg';
import profile from 'assets/images/icons/profile.svg';
import shopping_bag from 'assets/images/icons/shopping_bag.svg';

import './styles.scss';

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer__btn-block">
        <div className="footer__btn-block__btn">
          <img src={shopping_bag} alt="shopping_bag" />
        </div>
      </div>
      <div className="footer__icons-block">
        <img src={home} alt="home" />
        <img src={book} alt="book" />
        <img src={bell} alt="bell" />
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
};
