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
  useToast,
} from '@chakra-ui/react';
import { TbFolderPlus } from 'react-icons/tb';
import Modal from '../common/Modal';
import CreateFolder from './forms/CreateFolder';
import { useTargetFolder } from '@context/target.folder.context';
import { useSelectedFSNodeFile } from '@context/selected.fs.node.context';
import { FileSystemNode } from '../../../core/entities/file.system.node.entity';
import { useFileSystem } from '@cache/file.system';
import Folder from '../common/Folder';

type Props = {
  onClose: () => void;
};

const MoveFS = ({ onClose }: Props) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose: onCloseModal } = useDisclosure();
  const { useFolderContents, useMoveFolder } = useFileSystem();
  const { mutate, isLoading, isSuccess } = useMoveFolder();
  const { selectedFSNode, setSelectedFSNode } = useSelectedFSNodeFile();
  const { targetFolder, setTargetFolder } = useTargetFolder();
  const { data } = useFolderContents(targetFolder?.id, {
    select(data) {
      return data.filter((file) => file.type === 'folder');
    },
  });

  const onDoubleClick = (folder: FileSystemNode) => {
    setTargetFolder(folder);
  };

  const handleClose = () => {
    setTargetFolder(null);
    onClose();
  };

  const handleMove = () => {
    if (selectedFSNode)
      mutate({ file: selectedFSNode, parentFolderId: targetFolder?.id });
  };

  React.useEffect(() => {
    if (isSuccess) {
      toast({
        title: 'Moved Folder',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setSelectedFSNode(null);
      onClose();
      handleClose();
    }
  }, [isSuccess, onClose, handleClose, toast, setSelectedFSNode]);

  const renderFiles = data?.map((file: FileSystemNode) => {
    const isTargetFolder = file.id === selectedFSNode?.id;
    return (
      <Folder
        key={file.id}
        file={file}
        onDoubleClick={isTargetFolder ? () => {} : onDoubleClick}
      />
    );
  });

  return (
    <>
      {!isOpen && (
        <>
          <ModalHeader>Move item to...</ModalHeader>
          <ModalCloseButton onClick={handleClose} />
          <Divider />
          <Flex flexDirection="column" height={400} overflowY="auto">
            {renderFiles}
          </Flex>
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
              <ButtonGroup size="sm">
                <Button onClick={handleClose}>Cancel</Button>
                <Button
                  colorScheme="linkedin"
                  onClick={handleMove}
                  isLoading={isLoading}
                >
                  Move
                </Button>
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
