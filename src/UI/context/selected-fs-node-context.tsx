import React from 'react';
import { FSNode } from '../interfaces/File';

type SelectedFSNodeContextProps = {
  selectedFSNode: FSNode | null;
  setSelectedFSNode: (file: FSNode | null) => void;
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
  const [selectedFSNode, setSelectedFSNode] = React.useState<FSNode | null>(null);

  return (
    <SelectedFSNodeContext.Provider
      value={{ selectedFSNode, setSelectedFSNode }}
      {...props}
    />
  );
};

export { SelectedFSNodeProvider, useSelectedFSNodeFile };
