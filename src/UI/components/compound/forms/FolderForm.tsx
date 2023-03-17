import React from 'react';
import {
  Button,
  ButtonGroup,
  Flex,
  Input,
  ModalFooter,
  useToast,
} from '@chakra-ui/react';
import { TbFolderPlus } from 'react-icons/tb';

type Props = {
  mutate: (name: string) => void;
  onClose: () => void;
  label: string;
  successMessage: string;
  isLoading: boolean;
  isSuccess: boolean;
  defaultFileName?: string;
  isError: boolean;
  error: any;
};

const FolderForm = ({
  mutate,
  label,
  isLoading,
  isSuccess,
  onClose,
  defaultFileName = '',
  successMessage,
  isError,
  error,
}: Props) => {
  const FILE_NAME = 'fileName';
  const [fileName, setFileName] = React.useState<string>(defaultFileName);
  const toast = useToast();

  React.useEffect(() => {
    if (isSuccess) {
      toast({
        title: successMessage,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      onClose();
    }
    if (isError) {
      toast({
        title: 'Error Occurred',
        description: JSON.stringify(error),
        status: 'error',
        duration: 10000,
        isClosable: true,
      });
    }
  }, [isSuccess, onClose, toast, successMessage]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(fileName);
  };

  return (
    <form onSubmit={onSubmit}>
      <Flex px={6} py={8}>
        <Input
          id={FILE_NAME}
          name={FILE_NAME}
          value={fileName}
          placeholder="File Name"
          borderRadius="lg"
          onChange={(e) => setFileName(e.target.value)}
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

export default FolderForm;
