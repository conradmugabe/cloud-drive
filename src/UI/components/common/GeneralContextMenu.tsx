import React from 'react';
import { MenuItem, useDisclosure } from '@chakra-ui/react';
import { TbFilePlus, TbFolderPlus } from 'react-icons/tb';
import CreateFolder from '../compound/forms/CreateFolder';
import Modal from './Modal';

const GeneralContextMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <MenuItem icon={<TbFolderPlus size={24} />} onClick={onOpen}>
        New Folder
      </MenuItem>
      <MenuItem icon={<TbFilePlus size={24} />}>Upload File</MenuItem>
      <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered={true}>
        <CreateFolder onClose={onClose} />
      </Modal>
    </>
  );
};

export default GeneralContextMenu;
