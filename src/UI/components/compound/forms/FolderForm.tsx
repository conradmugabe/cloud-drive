import React from 'react';
import {
  Button,
  ButtonGroup,
  Flex,
  Input,
  ModalFooter,
} from '@chakra-ui/react';
import { TbFolderPlus } from 'react-icons/tb';

type Props = {
  mutate: (name: string) => void;
  onClose: () => void;
  label: string;
  isLoading: boolean;
  isSuccess: boolean;
  defaultFileName?: string;
};

const FolderForm = ({
  mutate,
  label,
  isLoading,
  isSuccess,
  onClose,
  defaultFileName = '',
}: Props) => {
  const FILE_NAME = 'fileName';
  const [fileName, setFileName] = React.useState<string>(defaultFileName);

  React.useEffect(() => {
    if (isSuccess) onClose();
  });

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
