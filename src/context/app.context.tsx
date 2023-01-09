import React from 'react';
import { TokenProvider } from '@context/token.context';
import { UserProvider } from '@context/user.context';
import { SelectedFSNodeProvider } from '@context/selected.fs.node.context';
import { TargetFolderProvider } from '@context/target.folder.context';

type Props = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: Props) => {
  return (
    <UserProvider>
      <TokenProvider>
        <SelectedFSNodeProvider>
          <TargetFolderProvider>{children}</TargetFolderProvider>
        </SelectedFSNodeProvider>
      </TokenProvider>
    </UserProvider>
  );
};

export default AppProvider;
