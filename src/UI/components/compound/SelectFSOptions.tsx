import React from 'react';
import { ButtonGroup, IconButton, Menu, MenuButton } from '@chakra-ui/react';
import { MdDeleteOutline, MdOutlineMoreVert } from 'react-icons/md';
import ContextMenu from './ContextMenu';
import { useSelectedFSNodeFile } from '../../context/selected-fs-node-context';

const SelectFSOptions = () => {
  const { selectedFSNode } = useSelectedFSNodeFile();
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <ButtonGroup>
      <IconButton
        aria-label="delete"
        variant="ghost"
        borderRadius="full"
        icon={<MdDeleteOutline size={24} />}
        _hover={{ bgColor: 'linkedin.100' }}
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
  );
};

export default SelectFSOptions;
