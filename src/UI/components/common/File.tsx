import React from 'react';
import {
  Flex,
  HStack,
  Menu,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FSNode } from '../../interfaces/File';
import { TbFolder, TbFile } from 'react-icons/tb';
import { useSelectedFSNodeFile } from '../../context/selected-fs-node-context';
import ContextMenu from '../compound/ContextMenu';
import { useContextMenu } from '../../hooks/useContextMenu';

interface Props {
  file: FSNode;
  onDoubleClick: (file: FSNode) => void;
}

const File = ({ file, onDoubleClick }: Props) => {
  const { selectedFSNode, setSelectedFSNode } = useSelectedFSNodeFile();
  const { x, y, showContextMenu, setShowContextMenu, setCoordinates } =
    useContextMenu();

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setShowContextMenu(false);
    setSelectedFSNode(file);
  };

  const onRightClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    onClick(e);
    setCoordinates({ x: e.pageX, y: e.pageY });
    setShowContextMenu(true);
  };

  const handleDoubleClick = () => {
    onDoubleClick(file);
  };

  const isFolder = file.type === 'folder';
  const isSelected = selectedFSNode && selectedFSNode.id === file.id;
  const backgroundColor = isSelected ? 'linkedin.100' : 'white';
  const backgroundColorOnHover = isSelected ? '' : 'gray.200';
  const isOpen = isSelected && showContextMenu ? true : false;

  return (
    <Flex
      position="relative"
      py="2.5"
      alignItems="center"
      justifyContent="space-between"
      px="5"
      cursor="pointer"
      borderRadius="lg"
      _hover={{ boxShadow: 'md', backgroundColor: `${backgroundColorOnHover}` }}
      onDoubleClick={handleDoubleClick}
      onClick={onClick}
      onContextMenu={onRightClick}
      backgroundColor={backgroundColor}
    >
      <HStack>
        {isFolder ? (
          <TbFolder strokeWidth={1} size={30} fill="gray" color="gray" />
        ) : (
          <TbFile strokeWidth={1} size={30} color="gray" />
        )}
        <VStack align="start" spacing="0">
          <Text fontSize="sm" fontWeight="bold" color="blackAlpha.800">
            {file.name}
          </Text>
          {!isFolder && (
            <Text fontSize="small" color="blackAlpha.600">
              {file.type} / {file.size}
            </Text>
          )}
        </VStack>
      </HStack>
      <Flex gap={2} alignItems="center">
        <Text fontSize="sm" color="blackAlpha.600">
          {file.updatedAt}
        </Text>
      </Flex>
      <Menu isOpen={isOpen}>
        <ContextMenu x={x} y={y} menuType={selectedFSNode?.type || ''} />
      </Menu>
    </Flex>
  );
};

export default File;
