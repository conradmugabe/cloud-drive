import React from 'react';
import {
  Button,
  ButtonGroup,
  Divider,
  Flex,
  IconButton,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  SimpleGrid,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import { TbFolderPlus } from 'react-icons/tb';
import Modal from '../common/Modal';
import CreateFolder from './forms/CreateFolder';

type Props = {
  onClose: () => void;
};

const MoveFS = ({ onClose }: Props) => {
  const { isOpen, onOpen, onClose: onCloseModal } = useDisclosure();

  return (
    <>
      {!isOpen && (
        <>
          <ModalHeader>Move item to...</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <SimpleGrid height={400} overflowY="auto"></SimpleGrid>
          <Divider />
          <ModalFooter>
            <Flex justifyContent="space-between" width="full">
              <Tooltip label="Create Folder">
                <IconButton
                  onClick={onOpen}
                  variant="ghost"
                  borderRadius="full"
                  aria-label="create folder"
                  icon={<TbFolderPlus size={24} />}
                />
              </Tooltip>
              <ButtonGroup>
                <Button onClick={onClose}>Cancel</Button>
                <Button colorScheme="linkedin">Move</Button>
              </ButtonGroup>
            </Flex>
          </ModalFooter>
        </>
      )}
      <Modal isOpen={isOpen} onClose={onCloseModal} size="md" isCentered={true}>
        <CreateFolder onClose={onCloseModal} />
      </Modal>
    </>
  );
};

export default MoveFS;
