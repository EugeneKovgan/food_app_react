/* eslint-disable import/no-extraneous-dependencies */
import React, { useCallback } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import filter_icon from 'assets/images/icons/filter.svg';

import './styles.scss';

type PropsType = {
  search: string;
  setSearch: (value: string) => void;
};

export const Search: React.FC<PropsType> = ({ search, setSearch }) => {
  const clearSearch = () => {
    setSearch('');
  };

  const onSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    [],
  );

  return (
    <div className="container">
      <div className="search">
        <Input
          className="search__input"
          size="large"
          placeholder="Search food . . ."
          prefix={<SearchOutlined />}
          value={search}
          onChange={onSearchChange}
        />
        <button onClick={clearSearch} type="button" className="search__btn">
          <img src={filter_icon} alt="filter_icon" />
        </button>
      </div>
    </div>
  );
};
