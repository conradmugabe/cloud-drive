import React from 'react';
import { Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { File as IFile } from '../../interfaces/File';
import { TbFolder, TbFile } from 'react-icons/tb';

interface Props {
  file: IFile;
  onDoubleClick: (file: IFile) => void;
  onSingleClick: (file: IFile) => void;
  selectedFSNode: IFile | null;
}

const File = ({
  file,
  onDoubleClick,
  onSingleClick,
  selectedFSNode,
}: Props) => {
  return (
    <Flex
      py="2.5"
      alignItems="center"
      justifyContent="space-between"
      px="5"
      cursor="pointer"
      borderRadius="lg"
      _hover={{ boxShadow: 'md' }}
      onDoubleClick={() => onDoubleClick(file)}
      onClick={() => onSingleClick(file)}
      backgroundColor={
        selectedFSNode && selectedFSNode.id === file.id
          ? 'linkedin.100'
          : 'white'
      }
    >
      <HStack>
        {file.isFolder ? (
          <TbFolder strokeWidth={1} size={30} fill="red" color="red" />
        ) : (
          <TbFile strokeWidth={1} size={30} fill="red" color="red" />
        )}
        <VStack align="start" spacing="0">
          <Text fontSize="sm" fontWeight="bold" color="blackAlpha.800">
            {file.name}
          </Text>
          {!file.isFolder && (
            <Text fontSize="small" color="blackAlpha.600">
              {file.fileType} / {file.size}
            </Text>
          )}
        </VStack>
      </HStack>
      <Text fontSize="sm" color="blackAlpha.600">
        {file.lastModified}
      </Text>
    </Flex>
  );
};

export default File;
