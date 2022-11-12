import React from 'react';
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalProps,
  ModalContent,
} from '@chakra-ui/react';

interface Props extends ModalProps {
  isOpen: boolean;
  onClose: () => void;
  isCentered?: boolean;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, isCentered, children }: Props) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} isCentered={isCentered}>
      <ModalOverlay />
      <ModalContent>{children}</ModalContent>
    </ChakraModal>
  );
};

export default Modal;
