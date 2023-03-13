import React from 'react';
import { MenuDivider, MenuItem, useDisclosure } from '@chakra-ui/react';
import {
  MdDeleteOutline,
  MdDriveFileRenameOutline,
  MdOutlineDriveFileMove,
} from 'react-icons/md';
import Modal from './Modal';
import DeleteForm from '../compound/forms/DeleteForm';
import MoveFS from '../compound/MoveFS';
import { useSelectedFSNodeFile } from '@context/selected.fs.node.context';
import RenameFolder from '../compound/forms/RenameFolder';

type Props = {
  showDeleteOption?: boolean;
};

const FSContextMenu = ({ showDeleteOption = true }: Props) => {
  const { selectedFSNode } = useSelectedFSNodeFile();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();
  const {
    isOpen: isMoveOpen,
    onOpen: onMoveOpen,
    onClose: onMoveClose,
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

  const onClickMove = (e: React.MouseEvent) => {
    onClick(e);
    onMoveOpen();
  };

  const isFolder = selectedFSNode?.type === 'folder';
  const name = isFolder ? 'Folder' : 'File';

  return (
    <>
      <MenuItem
        onClick={onClickRename}
        icon={<MdDriveFileRenameOutline size={20} />}
      >
        Rename {name}
      </MenuItem>
      <MenuItem
        onClick={onClickMove}
        icon={<MdOutlineDriveFileMove size={20} />}
      >
        Move {name}
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
        <RenameFolder onClose={onClose} />
      </Modal>
      <Modal isOpen={isMoveOpen} onClose={onMoveClose} size="xl" isCentered>
        <MoveFS onClose={onMoveClose} />
      </Modal>
      <Modal isOpen={isDeleteOpen} onClose={onDeleteClose} size="md" isCentered>
        <DeleteForm onClose={onDeleteClose} />
      </Modal>
    </>
  );
};

export default FSContextMenu;
