import React from 'react';
import { FileSystemNode } from '../../core/entities/file.system.node';

type SelectedFSNodeContextProps = {
  selectedFSNode: FileSystemNode | null;
  setSelectedFSNode: (file: FileSystemNode | null) => void;
};

type Props = {
  children: React.ReactNode;
};

const SelectedFSNodeContext =
  React.createContext<SelectedFSNodeContextProps | null>(null);

const useSelectedFSNodeFile = () => {
  const context = React.useContext(SelectedFSNodeContext);
  if (!context) {
    throw Error('useSelectedFSNodeFile must be used inside FileContextProvider');
  }
  return context;
};

const SelectedFSNodeProvider = (props: Props) => {
  const [selectedFSNode, setSelectedFSNode] = React.useState<FileSystemNode | null>(null);

  return (
    <SelectedFSNodeContext.Provider
      value={{ selectedFSNode, setSelectedFSNode }}
      {...props}
    />
  );
};

export { SelectedFSNodeProvider, useSelectedFSNodeFile };
