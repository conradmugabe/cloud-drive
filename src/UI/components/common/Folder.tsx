import React from 'react';
import { Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { TbFolder } from 'react-icons/tb';
import { formatDate } from '../../../utils/date';
import { FileSystemNode } from '../../../core/entities/file.system.node.entity';
import { useTargetFolder } from '../../context/target-folder';
import { useSelectedFSNodeFile } from '../../context/selected-fs-node-context';

type Props = {
  file: FileSystemNode;
  onDoubleClick: (file: FileSystemNode) => void;
};

const Folder = ({ file, onDoubleClick }: Props) => {
  const { targetFolder } = useTargetFolder();
  const { selectedFSNode } = useSelectedFSNodeFile();
  const isSelected = file.id === targetFolder?.id;
  const backgroundColor = isSelected ? 'linkedin.100' : 'white';
  const backgroundColorOnHover = isSelected ? '' : 'gray.200';
  const cursor = file.id === selectedFSNode?.id ? 'not-allowed' : 'pointer';
  const date = formatDate(file.updatedAt);

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  const onRightClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
  };

  const handleDoubleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    onClick(e);
    onDoubleClick(file);
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      px="2.5"
      cursor={cursor}
      borderRadius="lg"
      _hover={{ boxShadow: 'md', backgroundColor: `${backgroundColorOnHover}` }}
      onDoubleClick={handleDoubleClick}
      onClick={onClick}
      onContextMenu={onRightClick}
      backgroundColor={backgroundColor}
    >
      <HStack>
        <TbFolder strokeWidth={1} size={30} fill="gray" color="gray" />
        <VStack align="start" spacing="0">
          <Text fontSize="sm" fontWeight="bold" color="blackAlpha.800">
            {file.name}
          </Text>
        </VStack>
      </HStack>
      <Flex gap={2} alignItems="center">
        <Text fontSize="sm" color="blackAlpha.600">
          {date}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Folder;
