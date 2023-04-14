import React, { useState } from 'react';
import { Radio, RadioChangeEvent } from 'antd';
import { BTN_NAMES } from './models';

import './styles.scss';

export const Filter: React.FC = () => {
  const [btnFilter, setBtnFilter] = useState('fastFood');

  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    setBtnFilter(value);
  };

  return (
    <div className="filter">
      <Radio.Group
        className="filter__btn-block"
        options={BTN_NAMES}
        onChange={onChange}
        value={btnFilter}
        optionType="button"
        buttonStyle="solid"
      />
    </div>
  );
};
