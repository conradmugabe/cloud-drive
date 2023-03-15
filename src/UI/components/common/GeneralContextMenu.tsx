import React from 'react';
import { MenuItem, useDisclosure, useToast } from '@chakra-ui/react';
import { TbFilePlus, TbFolderPlus } from 'react-icons/tb';
import CreateFolder from '../compound/forms/CreateFolder';
import Modal from './Modal';
import { useFileSystem } from '@cache/file.system';
import { useParams } from 'react-router-dom';

const GeneralContextMenu = () => {
  const [, setFile] = React.useState<File>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const input = React.useRef<HTMLInputElement>(null);
  const { useAddFile } = useFileSystem();
  const { mutate, isSuccess } = useAddFile();
  const { folderId } = useParams();
  const toast = useToast();

  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
      mutate({ file: event.target.files[0], parentFolderId: folderId });
    }
  };

  const onFileChange = () => {
    if (input.current) {
      input.current.click();
    }
  };

  React.useEffect(() => {
    if (isSuccess) {
      toast({
        title: 'Added File',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      onClose();
    }
  }, [isSuccess, onClose, toast]);

  return (
    <>
      <MenuItem icon={<TbFolderPlus size={24} />} onClick={onOpen}>
        New Folder
      </MenuItem>
      <MenuItem icon={<TbFilePlus size={24} />} onClick={onFileChange}>
        Upload File
      </MenuItem>
      <input
        type="file"
        style={{ display: 'none' }}
        onChange={onChange}
        ref={input}
      />
      <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered={true}>
        <CreateFolder onClose={onClose} />
      </Modal>
    </>
  );
};

export default GeneralContextMenu;
