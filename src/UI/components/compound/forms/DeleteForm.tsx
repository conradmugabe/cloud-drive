import React from 'react';
import { Button, ButtonGroup, Flex, Heading, Text } from '@chakra-ui/react';
import { MdDeleteOutline } from 'react-icons/md';
import { useSelectedFSNodeFile } from '../../../context/selected-fs-node-context';

type Props = {
  onClose: () => void;
};

const DeleteForm = ({ onClose }: Props) => {
  const { selectedFSNode } = useSelectedFSNodeFile();
  const handleDelete = () => {};
  const isFolder = selectedFSNode?.type === 'folder' ? true : false;
  const name = isFolder ? 'Folder' : 'File';

  return (
    <form onSubmit={handleDelete}>
      <Flex
        bgColor="whiteAlpha.900"
        p={10}
        borderRadius="full"
        flexDirection="column"
        gap={8}
      >
        <Heading size="md">Delete {name}</Heading>
        <Text>
          Are you sure you want to delete {name.toLowerCase()}
          <Text fontWeight="bold">{selectedFSNode?.name}?</Text>
        </Text>
        <ButtonGroup alignSelf="flex-end">
          <Button size="sm" onClick={onClose}>
            Cancel
          </Button>
          <Button
            size="sm"
            colorScheme="red"
            type="submit"
            leftIcon={<MdDeleteOutline size={20} />}
          >
            Delete
          </Button>
        </ButtonGroup>
      </Flex>
    </form>
  );
};

export default DeleteForm;
