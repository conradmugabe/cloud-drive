import React from 'react';

interface Props {
  isOpen: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: Props) => {
  return isOpen ? <div className="h-screen bg-gray-800">{children}</div> : null;
};

export default Modal;
