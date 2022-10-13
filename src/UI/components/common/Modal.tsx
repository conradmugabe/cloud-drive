import React from 'react';
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalProps,
  ModalContent
} from '@chakra-ui/react';

interface Props extends ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: Props) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>{children}</ModalContent>
    </ChakraModal>
  );
};

export default Modal;
