import React from 'react';
import { Heading, IconButton, useDisclosure, VStack } from '@chakra-ui/react';
import StorageStats from './StorageStats';
import RecentFiles from './RecentFiles';
import FolderFiles from './FolderFiles';
import { TbPlus } from 'react-icons/tb';
import Modal from '../common/Modal';
import CreateFolderOrUploadFile from './CreateFolderOrUploadFile';

const FileExplorer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <VStack
        width="80%"
        align="start"
        position="relative"
        height="full"
        paddingRight="10"
        overflowY="auto"
      >
        <Heading as="h3" size="md">
          My Drive
        </Heading>
        <StorageStats />
        <RecentFiles />
        <FolderFiles />
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
      </VStack>
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <CreateFolderOrUploadFile onClose={onClose} />
      </Modal>
    </>
  );
};

export default FileExplorer;
