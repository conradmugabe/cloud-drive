import React from 'react';
import { Box, Text, Flex, ButtonGroup, Button } from '@chakra-ui/react';
import { TbFileUpload } from 'react-icons/tb';
import Dropzone from 'react-dropzone';

interface Props {
  onClose: () => void;
}

const UploadFile = ({ onClose }: Props) => {
  const handleFileUpload = () => {
    console.log('uploading file');
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
      <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <Box>
            <Flex
              height="200px"
              borderWidth="1px"
              borderStyle="dashed"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              gap={4}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <Text>Drag and drop some file here</Text>
              <Text>Or</Text>
              <Text>Click to select file</Text>
            </Flex>
          </Box>
        )}
      </Dropzone>
      <ButtonGroup alignSelf="flex-end">
        <Button size="sm" onClick={onClose}>
          Cancel
        </Button>
        <Button
          size="sm"
          colorScheme="green"
          onClick={handleFileUpload}
          leftIcon={<TbFileUpload />}
        >
          Upload File
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default UploadFile;
