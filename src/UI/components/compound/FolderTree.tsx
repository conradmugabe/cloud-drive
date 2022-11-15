import React from 'react';
import { Flex, Heading, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { FSNode } from '../../interfaces/File';
import File from '../common/File';
import FolderTreeViewToggler from './FolderTreeViewToggler';
import { useSelectedFSNodeFile } from '../../context/selected-fs-node-context';
import SelectFSOptions from './SelectFSOptions';

interface Props {
  heading: string;
  files: FSNode[];
  onDoubleClick: (file: FSNode) => void;
}

const FolderTree = ({ heading, files, onDoubleClick }: Props) => {
  const [search, setSearch] = React.useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { selectedFSNode } = useSelectedFSNodeFile();

  const filterFiles = (files: FSNode[], searchWord: string) => {
    return files.filter((file) =>
      file.name.toLowerCase().includes(searchWord.toLowerCase())
    );
  };

  const filteredFiles = React.useMemo(
    () => filterFiles(files, search),
    [files, search]
  );

  const renderFiles = filteredFiles.map((file: FSNode) => {
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
        paddingX={2}
        paddingY={4}
        borderRadius={8}
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
