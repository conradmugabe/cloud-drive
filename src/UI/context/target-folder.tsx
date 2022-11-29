import React from 'react';
import { FileSystemNode } from '../../core/entities/file.system.node';

type TargetFolderContextProps = {
  targetFolder: FileSystemNode | null;
  setTargetFolder: (folder: FileSystemNode | null) => void;
};

type Props = {
  children: React.ReactNode;
};

const TargetFolderContext =
  React.createContext<TargetFolderContextProps | null>(null);

const useTargetFolder = () => {
  const context = React.useContext(TargetFolderContext);
  if (!context) {
    throw Error('useTargetFolder must be used inside FileContextProvider');
  }
  return context;
};

const TargetFolderProvider = (props: Props) => {
  const [targetFolder, setTargetFolder] = React.useState<FileSystemNode | null>(
    null
  );

  return (
    <TargetFolderContext.Provider
      value={{ targetFolder, setTargetFolder }}
      {...props}
    />
  );
};

export { TargetFolderProvider, useTargetFolder };
