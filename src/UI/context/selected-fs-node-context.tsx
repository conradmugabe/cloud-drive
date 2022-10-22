import React from 'react';
import { File } from '../interfaces/File';

type SelectedFSNodeContextProps = {
  selectedFSNode: File | null;
  setSelectedFSNode: (file: File | null) => void;
};

type Props = {
  children: React.ReactNode;
};

const SelectedFSNodeContext =
  React.createContext<SelectedFSNodeContextProps | null>(null);

const useSelectedFSNodeFile = () => {
  const context = React.useContext(SelectedFSNodeContext);
  if (!context) {
    throw Error('useFile must be used inside FileContextProvider');
  }
  return context;
};

const SelectedFSNodeProvider = (props: Props) => {
  const [selectedFSNode, setSelectedFSNode] = React.useState<File | null>(null);

  return (
    <SelectedFSNodeContext.Provider
      value={{ selectedFSNode, setSelectedFSNode }}
      {...props}
    />
  );
};

export { SelectedFSNodeProvider, useSelectedFSNodeFile };
