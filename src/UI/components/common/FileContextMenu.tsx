import React from 'react';
import { MenuItem, MenuDivider, useDisclosure } from '@chakra-ui/react';
import {
  MdDriveFileRenameOutline,
  MdOutlineDriveFileMove,
  MdDeleteOutline,
} from 'react-icons/md';
import CreateFolder from '../compound/forms/CreateFolder';
import Modal from './Modal';

type Props = {
  showDeleteOption?: boolean;
};

const FileContextMenu = ({ showDeleteOption = true }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <MenuItem icon={<MdDriveFileRenameOutline size={20} onClick={onOpen} />}>
        Rename File
      </MenuItem>
      <MenuItem icon={<MdOutlineDriveFileMove size={20} />}>Move File</MenuItem>
      {showDeleteOption && (
        <>
          <MenuDivider />
          <MenuItem icon={<MdDeleteOutline size={20} />}>Remove</MenuItem>
        </>
      )}
      <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered={true}>
        <CreateFolder onClose={onClose} />
      </Modal>
    </>
  );
};

export default FileContextMenu;
