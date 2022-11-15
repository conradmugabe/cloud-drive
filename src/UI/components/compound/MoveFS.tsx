import React from 'react';
import {
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  SimpleGrid,
} from '@chakra-ui/react';
import { TbFolderPlus } from 'react-icons/tb';

type Props = {
  onClose: () => void;
};

const MoveFS = ({ onClose }: Props) => {
  return (
    <>
      <ModalHeader>Move item to...</ModalHeader>
      <ModalCloseButton />
      <SimpleGrid height={400}></SimpleGrid>
      <ModalFooter>
        <Flex justifyContent="space-between" width="full">
          <IconButton
            variant="ghost"
            borderRadius="full"
            aria-label="create folder"
            icon={<TbFolderPlus size={24} />}
          />
          <ButtonGroup>
            <Button onClick={onClose}>Cancel</Button>
            <Button colorScheme="linkedin">Move</Button>
          </ButtonGroup>
        </Flex>
      </ModalFooter>
    </>
  );
};

export default MoveFS;
