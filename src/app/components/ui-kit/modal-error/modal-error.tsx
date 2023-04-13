import React from 'react';
import cross_icon from 'assets/images/icons/close.svg';

import './styles.scss';

export const ModalError: React.FC = () => {
  return (
    <div className="modal-error">
      <button className="modal-error__btn" type="button">
        <img src={cross_icon} alt="cross_icon" />
      </button>
      modal-error
    </div>
  );
};
