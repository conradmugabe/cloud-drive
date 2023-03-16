import React from 'react';
import {
  Button,
  ButtonGroup,
  Divider,
  Flex,
  ModalFooter,
  ModalHeader,
  Text,
  useToast,
} from '@chakra-ui/react';
import { MdDeleteOutline } from 'react-icons/md';
import { useSelectedFSNodeFile } from '@context/selected.fs.node.context';
import { useFileSystem } from '@cache/file.system';

type Props = {
  onClose: () => void;
};

const DeleteForm = ({ onClose }: Props) => {
  const toast = useToast();
  const { useDeleteFileSystemNode } = useFileSystem();
  const { mutate, isLoading, isSuccess } = useDeleteFileSystemNode();
  const { selectedFSNode, setSelectedFSNode } = useSelectedFSNodeFile();
  const isFolder = selectedFSNode?.type === 'folder' ? true : false;
  const name = isFolder ? 'Folder' : 'File';
  const handleDelete = (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedFSNode) mutate(selectedFSNode);
  };

  React.useEffect(() => {
    if (isSuccess) {
      toast({
        title: 'Deleted Folder',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      setSelectedFSNode(null);
      onClose();
    }
  }, [isSuccess, onClose, toast]);

  return (
    <form onSubmit={handleDelete}>
      <ModalHeader>Delete {name}</ModalHeader>
      <Divider />
      <Flex px={6} py={4}>
        <Text>
          Are you sure you want to delete {name.toLowerCase()}
          <Text fontWeight="bold">{selectedFSNode?.name}?</Text>
        </Text>
      </Flex>
      <ModalFooter>
        <ButtonGroup alignSelf="flex-end">
          <Button size="sm" onClick={onClose}>
            Cancel
          </Button>
          <Button
            size="sm"
            colorScheme="red"
            type="submit"
            leftIcon={<MdDeleteOutline size={20} />}
            isLoading={isLoading}
          >
            Delete
          </Button>
        </ButtonGroup>
      </ModalFooter>
    </form>
  );
};

export default DeleteForm;
