import React from 'react';
import { Text, Flex, ButtonGroup, Button } from '@chakra-ui/react';
import { TbFileUpload } from 'react-icons/tb';

interface Props {
  onClose: () => void;
}

const UploadFile = ({ onClose }: Props) => {
  return (
    <Flex bgColor="whiteAlpha.900" p="10" flexDirection="column" gap="8">
      <Flex
        border="1px"
        borderStyle="dashed"
        p="10"
        py="20"
        borderRadius="xl"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Drag file into area to upload</Text>
      </Flex>
      <ButtonGroup alignSelf="flex-end">
        <Button size="sm" onClick={onClose}>
          Cancel
        </Button>
        <Button
          size="sm"
          colorScheme="green"
          onClick={() => alert('Created New File')}
          leftIcon={<TbFileUpload />}
        >
          Upload File
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default UploadFile;
