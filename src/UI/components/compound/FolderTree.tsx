import React from 'react';
import { Flex, Heading, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import File from '../common/File';
import FolderTreeViewToggler from './FolderTreeViewToggler';
import { useSelectedFSNodeFile } from '../../context/selected-fs-node-context';
import SelectFSOptions from './SelectFSOptions';
import { FileSystemNode } from '../../../core/entities/file.system.node';

interface Props {
  heading: string;
  files: FileSystemNode[];
  onDoubleClick: (file: FileSystemNode) => void;
}

const FolderTree = ({ heading, files, onDoubleClick }: Props) => {
  const [search, setSearch] = React.useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { selectedFSNode } = useSelectedFSNodeFile();

  const filterFiles = (files: FileSystemNode[], searchWord: string) => {
    return files.filter((file) =>
      file.name.toLowerCase().includes(searchWord.toLowerCase())
    );
  };

  const filteredFiles = React.useMemo(
    () => filterFiles(files, search),
    [files, search]
  );

  const renderFiles = filteredFiles.map((file: FileSystemNode) => {
    const isFolder = file.type === 'folder';

    return (
      <File
        key={file.id}
        file={file}
        onDoubleClick={isFolder ? onDoubleClick : () => {}}
      />
    );
  });

  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        position="sticky"
        top={0}
        bgColor="white"
        paddingX={4}
        paddingY={4}
        borderRadius={8}
        zIndex={100}
      >
        <Heading as="h4" size="sm">
          {heading}
        </Heading>
        <FolderTreeViewToggler
          search={search}
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
          setSearch={setSearch}
        >
          {selectedFSNode ? <SelectFSOptions /> : undefined}
        </FolderTreeViewToggler>
      </Flex>
      <SimpleGrid columns={isOpen ? 1 : 2} gap="5" width="100%" px="1" py="5">
        {renderFiles}
      </SimpleGrid>
    </>
  );
};

export default FolderTree;
