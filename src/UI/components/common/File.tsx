import React from 'react';
import { Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { FSNode } from '../../interfaces/File';
import { TbFolder, TbFile } from 'react-icons/tb';
import { useSelectedFSNodeFile } from '../../context/selected-fs-node-context';

interface Props {
  file: FSNode;
  onDoubleClick: (file: FSNode) => void;
  handleClickedChild: () => void;
}

const File = ({ file, onDoubleClick, handleClickedChild }: Props) => {
  const { selectedFSNode, setSelectedFSNode } = useSelectedFSNodeFile();

  const onClick = () => {
    setSelectedFSNode(file);
    handleClickedChild();
  };

  const onRightClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClick();
  };

  const handleDoubleClick = () => {
    onDoubleClick(file);
  };

  const isFolder = file.type === 'folder';
  const isSelected = selectedFSNode && selectedFSNode.id === file.id;
  const backgroundColor = isSelected ? 'linkedin.100' : 'white';
  const backgroundColorOnHover = isSelected ? '' : 'gray.200';

  return (
    <Flex
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
    </Flex>
  );
};

export default File;
