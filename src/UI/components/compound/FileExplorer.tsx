import React from 'react';
import { Heading, IconButton, useDisclosure } from '@chakra-ui/react';
import { TbPlus } from 'react-icons/tb';
import Modal from '../common/Modal';
import { Outlet } from 'react-router-dom';
import CreateFolder from './forms/CreateFolder';
import AddNew from './AddNew';

const FileExplorer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Heading as="h3" size="md">
        My Drive
      </Heading>
      <Outlet />
      <AddNew onOpen={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered={true}>
        <CreateFolder onClose={onClose} />
      </Modal>
    </>
  );
};

export default FileExplorer;
