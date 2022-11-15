import React from 'react';
import { MenuDivider, MenuItem, useDisclosure } from '@chakra-ui/react';
import {
  MdDeleteOutline,
  MdDriveFileRenameOutline,
  MdOutlineDriveFileMove,
} from 'react-icons/md';
import CreateFolder from '../compound/forms/CreateFolder';
import Modal from './Modal';
import DeleteForm from '../compound/forms/DeleteForm';

type Props = {
  showDeleteOption?: boolean;
};

const FolderContextMenu = ({ showDeleteOption = true }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();

  const onClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const onClickRename = (e: React.MouseEvent) => {
    onClick(e);
    onOpen();
  };

  const onClickDelete = (e: React.MouseEvent) => {
    onClick(e);
    onDeleteOpen();
  };

  return (
    <>
      <MenuItem
        onClick={onClickRename}
        icon={<MdDriveFileRenameOutline size={20} />}
      >
        Rename Folder
      </MenuItem>
      <MenuItem icon={<MdOutlineDriveFileMove size={20} />}>
        Move Folder
      </MenuItem>
      {showDeleteOption && (
        <>
          <MenuDivider />
          <MenuItem
            onClick={onClickDelete}
            icon={<MdDeleteOutline size={20} />}
          >
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

export default FolderContextMenu;
