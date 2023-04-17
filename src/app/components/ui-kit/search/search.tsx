/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import filter_icon from 'assets/images/icons/filter.svg';

import './styles.scss';

type PropsType = {
  search: string;
  setSearch: (value: string) => void;
};

export const Search: React.FC<PropsType> = ({ search, setSearch }) => {
  const [currentValue, setCurrentValue] = useState('');

  console.log(search);

  return (
    <div className="container">
      <div className="search">
        <Input
          className="search__input"
          size="large"
          placeholder="Search food . . ."
          prefix={<SearchOutlined />}
          // onChange={e => setSearch(e.target.value)}
          onChange={e => setCurrentValue(e.target.value)}
        />
        <button
          onClick={() => setSearch(currentValue)}
          type="button"
          className="search__btn"
        >
          <img src={filter_icon} alt="filter_icon" />
        </button>
      </div>
    </div>
  );
};
