import React from 'react';
import { Divider, ModalHeader } from '@chakra-ui/react';
import { useSelectedFSNodeFile } from '@context/selected.fs.node.context';
import { useRenameFileSystem } from '@src/UI/hooks/useFileSystemService';
import FolderForm from './FolderForm';

interface Props {
  onClose: () => void;
}

const RenameFolder = ({ onClose }: Props) => {
  const { mutate, isLoading, isSuccess } = useRenameFileSystem();
  const { selectedFSNode, setSelectedFSNode } = useSelectedFSNodeFile();
  const isFolder = selectedFSNode?.type === 'folder';
  const fileType = `${isFolder ? 'folder' : 'file'}`;
  const label = `Rename ${fileType}`;

  React.useEffect(() => {
    if (isSuccess) setSelectedFSNode(null);
  }, [setSelectedFSNode, isSuccess]);

  const onRename = (fileName: string) => {
    mutate({ name: fileName, id: selectedFSNode?.id || '' });
  };

  return (
    <>
      <ModalHeader>Rename {fileType}</ModalHeader>
      <Divider />
      <FolderForm
        mutate={onRename}
        isLoading={isLoading}
        isSuccess={isSuccess}
        label={label}
        onClose={onClose}
        defaultFileName={selectedFSNode?.name}
      />
    </>
  );
};

export default RenameFolder;
