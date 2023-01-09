import React from 'react';
import {
  ButtonGroup,
  IconButton,
  Menu,
  MenuButton,
  useDisclosure,
} from '@chakra-ui/react';
import { MdDeleteOutline, MdOutlineMoreVert } from 'react-icons/md';
import ContextMenu from './ContextMenu';
import { useSelectedFSNodeFile } from '../../context/selected.fs.node.context';
import Modal from '../common/Modal';
import DeleteForm from './forms/DeleteForm';

const SelectFSOptions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { selectedFSNode } = useSelectedFSNodeFile();
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
  };

  const onDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick(e);
    onOpen();
  };

  return (
    <>
      <ButtonGroup>
        <IconButton
          aria-label="delete"
          variant="ghost"
          borderRadius="full"
          icon={<MdDeleteOutline size={24} />}
          _hover={{ bgColor: 'linkedin.100' }}
          onClick={onDelete}
        />
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="select options"
            icon={<MdOutlineMoreVert size={24} />}
            variant="ghost"
            borderRadius="full"
            _hover={{ bgColor: 'linkedin.100' }}
            onClick={onClick}
          />
          <ContextMenu
            menuType={selectedFSNode?.type || ''}
            showDeleteOption={false}
          />
        </Menu>
      </ButtonGroup>
      <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered>
        <DeleteForm onClose={onClose} />
      </Modal>
    </>
  );
};

export default SelectFSOptions;
