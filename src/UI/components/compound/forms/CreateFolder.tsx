import React from 'react';
import { Button, ButtonGroup, Flex } from '@chakra-ui/react';
import { TbFolderPlus } from 'react-icons/tb';
import Input from '../../common/Input';
import { useParams } from 'react-router-dom';

interface Props {
  onClose: () => void;
}

const CreateFolder = ({ onClose }: Props) => {
  const FILE_NAME = 'fileName';
  const HELPER_TEXT = 'Cannot have the same file name in same directory';
  const [fileName, setFileName] = React.useState('');
  const { folderId } = useParams();

  const handleCreateFolder = () => {
    console.log(folderId);
    const values = { folderId, fileName };
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Flex
      bgColor="whiteAlpha.900"
      py="5"
      px="2"
      borderRadius="full"
      flexDirection="column"
      gap="8"
    >
      <Input
        id={FILE_NAME}
        name={FILE_NAME}
        value={fileName}
        helperText={HELPER_TEXT}
        placeholder="File Name"
        borderRadius="lg"
        onChange={(e) => setFileName(e.target.value)}
      />
      <ButtonGroup alignSelf="flex-end">
        <Button size="sm" onClick={onClose}>
          Cancel
        </Button>
        <Button
          size="sm"
          colorScheme="green"
          onClick={handleCreateFolder}
          leftIcon={<TbFolderPlus />}
        >
          Create Folder
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default CreateFolder;
