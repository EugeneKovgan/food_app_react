/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import filter_icon from 'assets/images/icons/filter.svg';

import './styles.scss';

export const Search: React.FC = () => {
  return (
    <div className="container">
      <div className="search">
        <Input
          className="search__input"
          size="large"
          placeholder="Search food . . ."
          prefix={<SearchOutlined />}
        />
        <button type="button" className="search__btn">
          <img src={filter_icon} alt="filter_icon" />
        </button>
      </div>
    </div>
  );
};
