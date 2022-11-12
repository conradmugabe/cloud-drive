import React from 'react';
import { Heading, IconButton, useDisclosure } from '@chakra-ui/react';
import { TbPlus } from 'react-icons/tb';
import Modal from '../common/Modal';
import CreateFolderOrUploadFile from './CreateFolderOrUploadFile';
import { Outlet } from 'react-router-dom';

const FileExplorer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Heading as="h3" size="md">
        My Drive
      </Heading>
      <Outlet />
      <IconButton
        colorScheme="facebook"
        aria-label="Create Folder"
        position="fixed"
        bottom="10"
        right="16"
        borderRadius="full"
        boxShadow="xl"
        size="lg"
        icon={<TbPlus />}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <CreateFolderOrUploadFile onClose={onClose} />
      </Modal>
    </>
  );
};

export default FileExplorer;
