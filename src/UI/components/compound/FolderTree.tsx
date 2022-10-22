import React from 'react';
import {
  ButtonGroup,
  Flex,
  Heading,
  HStack,
  IconButton,
  SimpleGrid,
  useDisclosure,
} from '@chakra-ui/react';
import { TbLayoutGrid, TbLayoutList, TbSearch } from 'react-icons/tb';
import Input from '../common/Input';
import { File as IFile } from '../../interfaces/File';
import File from '../common/File';

interface Props {
  heading: string;
  showSearchBar?: boolean;
  files: IFile[];
  onDoubleClick: (file: IFile) => void;
  onSingleClick: (file: IFile) => void;
  selectedFSNode: IFile | null;
}

const FolderTree = ({
  heading,
  files,
  onDoubleClick,
  onSingleClick,
  showSearchBar = true,
  selectedFSNode,
}: Props) => {
  const [search, setSearch] = React.useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const SearchIcon = <TbSearch />;

  const filterFiles = (files: IFile[], searchWord: string) => {
    return files.filter((file) =>
      file.name.toLowerCase().includes(searchWord.toLowerCase())
    );
  };

  const filteredFiles = React.useMemo(
    () => filterFiles(files, search),
    [files, search]
  );

  const renderFiles = filteredFiles.map((file: IFile) => (
    <File
      key={file.id}
      file={file}
      onDoubleClick={file.isFolder ? onDoubleClick : () => {}}
      onSingleClick={onSingleClick}
      selectedFSNode={selectedFSNode}
    />
  ));

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" width="100%">
        <Heading as="h4" size="sm">
          {heading}
        </Heading>
        {showSearchBar && (
          <HStack marginLeft="auto">
            <Input
              id="file-search"
              placeholder="Search"
              colorScheme="linkedin"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              inputLeftElement={SearchIcon}
            />
            <ButtonGroup
              spacing="1"
              padding="1"
              bgColor="white"
              borderRadius="md"
            >
              <IconButton
                aria-label="Use list layout"
                colorScheme={isOpen ? 'linkedin' : 'gray'}
                size="sm"
                icon={<TbLayoutList />}
                onClick={onOpen}
              />
              <IconButton
                aria-label="Use grid layout"
                colorScheme={isOpen ? 'gray' : 'linkedin'}
                size="sm"
                onClick={onClose}
                icon={<TbLayoutGrid />}
              />
            </ButtonGroup>
          </HStack>
        )}
      </Flex>
      <SimpleGrid columns={isOpen ? 1 : 2} gap="5" width="100%" px="1" py="5">
        {renderFiles}
      </SimpleGrid>
    </>
  );
};

export default FolderTree;
