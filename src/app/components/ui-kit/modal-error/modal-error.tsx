/* eslint-disable @typescript-eslint/naming-convention */
import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';

import './styles.scss';

interface propsTypes {
  modal: boolean;
}

export const ModalError: React.FC<propsTypes> = ({ modal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (modal) {
      setIsModalOpen(true);
    }
  }, [isModalOpen]);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};
