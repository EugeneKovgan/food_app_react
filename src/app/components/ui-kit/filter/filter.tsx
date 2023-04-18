import React from 'react';
import { BTN_NAMES } from './models';

import './styles.scss';

type PropsType = {
  setBtnFilter: (value: string) => void;
};

export const Filter: React.FC<PropsType> = ({ setBtnFilter }) => {
  return (
    <div className="filter">
      <div className="filter__btn-block">
        {BTN_NAMES.map(btn => {
          return (
            <button
              onClick={() => setBtnFilter(btn.value)}
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
