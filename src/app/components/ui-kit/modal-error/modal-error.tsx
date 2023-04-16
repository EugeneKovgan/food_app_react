/* eslint-disable @typescript-eslint/naming-convention */
import React, { useEffect } from 'react';
import { Modal } from 'antd';

import './styles.scss';

interface propsTypes {
  isModalOpen: boolean;
  setIsModalOpen: any;
}

export const ModalError: React.FC<propsTypes> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
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
