import React from 'react';
import { ButtonGroup, HStack, IconButton } from '@chakra-ui/react';
import { TbLayoutGrid, TbLayoutList, TbSearch } from 'react-icons/tb';
import Input from '../common/Input';

type Props = {
  search: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  setSearch: (search: string) => void;
  children?: JSX.Element;
};

const FolderTreeViewToggler = ({
  search,
  isOpen,
  setSearch,
  onOpen,
  onClose,
  children,
}: Props) => {
  const SearchIcon = <TbSearch />;

  return (
    <HStack marginLeft="auto">
      {children}
      <Input
        id="file-search"
        placeholder="Search"
        colorScheme="linkedin"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        inputLeftElement={SearchIcon}
      />
      <ButtonGroup spacing="1" padding="1" bgColor="white" borderRadius="md">
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
  );
};

export default FolderTreeViewToggler;
