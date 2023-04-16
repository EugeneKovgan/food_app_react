import React, { useState } from 'react';
import { BTN_NAMES } from './models';

import './styles.scss';

export const Filter: React.FC = () => {
  const [btnFilter, setBtnFilter] = useState('');

  const onChange = ({ target: { value } }: any) => {
    setBtnFilter(value);
  };

  return (
    <div className="filter">
      <div className="filter__btn-block">
        {BTN_NAMES.map(btn => {
          return (
            <button
              type="button"
              onChange={onChange}
              value={btnFilter}
              key={btn.id}
            >
              {btn.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
