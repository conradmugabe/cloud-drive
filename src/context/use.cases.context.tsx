import React from 'react';
import { AuthUseCases } from '@useCases/auth.use.cases';
import { FileSystemUseCases } from '@useCases/file.system.use.cases';

export type UseCases = {
  authUseCases: AuthUseCases;
  fileSystemUseCases: FileSystemUseCases;
};

type UseCasesContextProps = UseCases;

type Props = {
  children: React.ReactNode;
  useCases: UseCases;
};

const UseCasesContext = React.createContext<UseCasesContextProps | undefined>(
  undefined
);

const useUseCases = () => {
  const context = React.useContext(UseCasesContext);
  if (!context) {
    throw Error('useUseCases must be used inside UseCasesContextProvider');
  }
  return context;
};

const UseCasesProvider = ({ useCases, children }: Props) => {
  return (
    <UseCasesContext.Provider value={useCases}>
      {children}
    </UseCasesContext.Provider>
  );
};

export { UseCasesProvider, useUseCases };
