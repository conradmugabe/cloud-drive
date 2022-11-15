import React from 'react';
import { Button, ButtonGroup, Flex, Heading } from '@chakra-ui/react';
import { TbFolderPlus } from 'react-icons/tb';
import Input from '../../common/Input';
import { useParams } from 'react-router-dom';
import { useSelectedFSNodeFile } from '../../../context/selected-fs-node-context';

interface Props {
  onClose: () => void;
}

const CreateFolder = ({ onClose }: Props) => {
  const FILE_NAME = 'fileName';
  const { selectedFSNode } = useSelectedFSNodeFile();
  const [fileName, setFileName] = React.useState(selectedFSNode?.name || '');
  const { folderId } = useParams();

  const handleCreateFolder = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const values = { folderId, fileName };
    alert(JSON.stringify(values, null, 2));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(e.target.value);
  };

  return (
    <form onSubmit={handleCreateFolder}>
      <Flex
        bgColor="whiteAlpha.900"
        p="10"
        borderRadius="full"
        flexDirection="column"
        gap="8"
      >
        <Heading size="md">New Folder</Heading>
        <Input
          id={FILE_NAME}
          name={FILE_NAME}
          value={fileName}
          placeholder="File Name"
          borderRadius="lg"
          onChange={handleChange}
        />
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
          >
            Create Folder
          </Button>
        </ButtonGroup>
      </Flex>
    </form>
  );
};

export default CreateFolder;
