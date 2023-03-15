import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppProvider from '@context/app.context';
import { UseCasesProvider } from '@context/use.cases.context';
import { AuthUseCases } from '@useCases/auth.use.cases';
import { FirebaseAuthDatabaseService } from '@services/firebase/auth.firebase.database.service';
import { FirebaseFileSystemDatabaseService } from '@services/firebase/file.system.database.service';
import { FileSystemUseCases } from '@useCases/file.system.use.cases';
import App from '@src/App';

import '@src/index.css';
import { ApiLocal } from '@services/api.local/api.local';
import { StorageFirebaseService } from '@services/firebase/storage.firebase.service';
import { FilesUseCases } from '@useCases/files.use.cases';

const storageService = new StorageFirebaseService();

const databaseService = new FirebaseFileSystemDatabaseService();
const authDatabaseService = new FirebaseAuthDatabaseService();
const fileSystemDatabaseService = new ApiLocal(databaseService, storageService);

const filesUseCases = new FilesUseCases(fileSystemDatabaseService);
const fileSystemUseCases = new FileSystemUseCases(fileSystemDatabaseService);
const authUseCases = new AuthUseCases(authDatabaseService);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <UseCasesProvider useCases={{ authUseCases, fileSystemUseCases, filesUseCases }}>
      <AppProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </AppProvider>
    </UseCasesProvider>
  </React.StrictMode>
);
