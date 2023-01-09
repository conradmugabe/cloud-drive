import React from 'react';
import { IconButton, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import { TbPlus } from 'react-icons/tb';
import GeneralContextMenu from '../common/GeneralContextMenu';
import { useSelectedFSNodeFile } from '../../context/selected.fs.node.context';

const AddNew = () => {
  const { setSelectedFSNode } = useSelectedFSNodeFile();

  const onClick = () => {
    setSelectedFSNode(null);
  };

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        colorScheme="facebook"
        aria-label="Add New Folder Or File"
        position="fixed"
        bottom="10"
        right="16"
        borderRadius="full"
        boxShadow="xl"
        size="lg"
        icon={<TbPlus />}
        onClick={onClick}
      />
      <MenuList boxShadow="lg">
        <GeneralContextMenu />
      </MenuList>
    </Menu>
  );
};

export default AddNew;
