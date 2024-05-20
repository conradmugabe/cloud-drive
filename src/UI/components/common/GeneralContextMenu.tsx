import React from 'react';
import {
  MenuItem,
  ToastId,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { TbFilePlus, TbFolderPlus } from 'react-icons/tb';
import CreateFolder from '../compound/forms/CreateFolder';
import Modal from './Modal';
import { useFileSystem } from '@cache/file.system';
import { useParams } from 'react-router-dom';

const GeneralContextMenu = () => {
  const [, setFile] = React.useState<File>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const input = React.useRef<HTMLInputElement>(null);
  const { useAddFile, progress } = useFileSystem();
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

  const toastIdRef = React.useRef<ToastId | null>(null);

  React.useEffect(() => {
    if (progress > 0 && progress < 100) {
      if (!toastIdRef.current) {
        toastIdRef.current = toast({
          title: 'Uploading file...',
          description: `${progress}% Uploaded`,
          status: 'info',
          duration: null,
          isClosable: true,
        });
      } else {
        toast.update(toastIdRef.current, {
          title: 'Uploading file...',
          description: `${progress}% Uploaded`,
        });
      }
    } else if (progress === 0 && isSuccess) {
      if (toastIdRef.current) {
        toast.update(toastIdRef.current, {
          title: 'Added File',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        toastIdRef.current = null;
      }
    }
  }, [progress, toast, isSuccess]);

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
