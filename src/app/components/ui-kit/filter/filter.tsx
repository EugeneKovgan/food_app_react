import React, { useState } from 'react';
import { BTN_NAMES } from './models';

import './styles.scss';

export const Filter: React.FC = () => {
  const [btnFilter, setBtnFilter] = useState('fastFood');

  const onChange = ({ target: { value } }: any) => {
    console.log(btnFilter);

    setBtnFilter(value);
  };

  return (
    <div className="filter">
      <div className="filter__btn-block">
        {BTN_NAMES.map(btn => {
          return (
            <button
              onClick={onChange}
              type="button"
              value={btn.value}
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
