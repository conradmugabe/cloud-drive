import React from 'react';
import {
  Button,
  ButtonGroup,
  Divider,
  Flex,
  ModalFooter,
  ModalHeader,
} from '@chakra-ui/react';
import { TbFolderPlus } from 'react-icons/tb';
import Input from '../../common/Input';
import { useParams } from 'react-router-dom';
import { useSelectedFSNodeFile } from '../../../context/selected.fs.node.context';
import {
  useAddFolder,
  useRenameFileSystem,
} from '../../../hooks/useFileSystemService';

interface Props {
  onClose: () => void;
}

const CreateFolder = ({ onClose }: Props) => {
  const FILE_NAME = 'fileName';
  const { selectedFSNode, setSelectedFSNode } = useSelectedFSNodeFile();
  const [fileName, setFileName] = React.useState(selectedFSNode?.name || '');
  const { folderId } = useParams();
  const { mutate, isLoading: isAdding, isSuccess } = useAddFolder();
  const {
    mutate: rename,
    isLoading: isRenaming,
    isSuccess: hasRenamed,
  } = useRenameFileSystem();

  const isLoading = isRenaming || isAdding ? true : false;

  React.useEffect(() => {
    if (isSuccess) {
      setSelectedFSNode(null);
      setFileName('');
      onClose();
    }
    if (hasRenamed) {
      onClose();
    }
  }, [isSuccess, setSelectedFSNode, onClose, hasRenamed]);

  const handleCreateFolder = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (selectedFSNode) {
      rename({ name: fileName, id: selectedFSNode.id });
      return;
    }
    mutate({ name: fileName, parentFolderId: folderId });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(e.target.value);
  };

  const isFolder = selectedFSNode?.type === 'folder';
  const fileType = `${isFolder ? 'folder' : 'file'}`;
  const label = selectedFSNode ? `Rename ${fileType}` : 'Create Folder';

  return (
    <form onSubmit={handleCreateFolder}>
      <ModalHeader>New Folder</ModalHeader>
      <Divider />
      <Flex px={6} py={8}>
        <Input
          id={FILE_NAME}
          name={FILE_NAME}
          value={fileName}
          placeholder="File Name"
          borderRadius="lg"
          onChange={handleChange}
        />
      </Flex>
      <ModalFooter>
        <ButtonGroup alignSelf="flex-end">
          <Button size="sm" onClick={onClose}>
            Cancel
          </Button>
          <Button
            size="sm"
            colorScheme="green"
            type="submit"
            isDisabled={fileName.length === 0}
            leftIcon={<TbFolderPlus />}
            isLoading={isLoading}
          >
            {label}
          </Button>
        </ButtonGroup>
      </ModalFooter>
    </form>
  );
};

export default CreateFolder;
