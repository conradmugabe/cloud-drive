import React from 'react';
import { MenuItem, MenuDivider, useDisclosure } from '@chakra-ui/react';
import {
  MdDriveFileRenameOutline,
  MdOutlineDriveFileMove,
  MdDeleteOutline,
} from 'react-icons/md';
import CreateFolder from '../compound/forms/CreateFolder';
import Modal from './Modal';
import DeleteForm from '../compound/forms/DeleteForm';

type Props = {
  showDeleteOption?: boolean;
};

const FileContextMenu = ({ showDeleteOption = true }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();

  return (
    <>
      <MenuItem onClick={onOpen} icon={<MdDriveFileRenameOutline size={20} />}>
        Rename File
      </MenuItem>
      <MenuItem icon={<MdOutlineDriveFileMove size={20} />}>Move File</MenuItem>
      {showDeleteOption && (
        <>
          <MenuDivider />
          <MenuItem onClick={onDeleteOpen} icon={<MdDeleteOutline size={20} />}>
            Remove
          </MenuItem>
        </>
      )}
      <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered={true}>
        <CreateFolder onClose={onClose} />
      </Modal>
      <Modal isOpen={isDeleteOpen} onClose={onDeleteClose} size="md" isCentered>
        <DeleteForm onClose={onDeleteClose} />
      </Modal>
    </>
  );
};

export default FileContextMenu;
