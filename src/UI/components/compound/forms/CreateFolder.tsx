import React from 'react';
import { Divider, ModalHeader } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useAddFolder } from '../../../hooks/useFileSystemService';
import FolderForm from './FolderForm';

interface Props {
  onClose: () => void;
}

const CreateFolder = ({ onClose }: Props) => {
  const label = 'Create Folder';
  const { folderId } = useParams();
  const { mutate, isLoading, isSuccess } = useAddFolder();

  const handleCreateFolder = (fileName: string) => {
    mutate({ name: fileName, parentFolderId: folderId });
  };

  return (
    <>
      <ModalHeader>New Folder</ModalHeader>
      <Divider />
      <FolderForm
        mutate={handleCreateFolder}
        isLoading={isLoading}
        isSuccess={isSuccess}
        label={label}
        onClose={onClose}
      />
    </>
  );
};

export default CreateFolder;
