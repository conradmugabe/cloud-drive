import React from 'react';
import { MenuDivider, MenuItem, useDisclosure } from '@chakra-ui/react';
import {
  MdDeleteOutline,
  MdDriveFileRenameOutline,
  MdOutlineDriveFileMove,
} from 'react-icons/md';
import CreateFolder from '../compound/forms/CreateFolder';
import Modal from './Modal';

type Props = {
  showDeleteOption?: boolean;
};

const FolderContextMenu = ({ showDeleteOption = true }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <MenuItem icon={<MdDriveFileRenameOutline size={20} onClick={() => alert("CLICKED RENAME")} />}>
        Rename Folder
      </MenuItem>
      <MenuItem icon={<MdOutlineDriveFileMove size={20} />}>
        Move Folder
      </MenuItem>
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

export default FolderContextMenu;
