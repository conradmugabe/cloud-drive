import React from 'react';
import { MenuItem, useDisclosure } from '@chakra-ui/react';
import { TbFilePlus, TbFolderPlus } from 'react-icons/tb';
import CreateFolder from '../compound/forms/CreateFolder';
import Modal from './Modal';

const GeneralContextMenu = () => {
  const [, setFile] = React.useState<File>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const input = React.useRef<HTMLInputElement>(null);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const onFileChange = () => {
    if (input.current) {
      input.current.click();
    }
  };

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
