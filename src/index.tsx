import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppProvider from '@context/app.context';
import App from '@src/App';
import '@src/index.css';
import { UseCasesProvider } from '@context/use.cases.context';
import { AuthUseCases } from '@useCases/auth.use.cases';
import { FirebaseAuthDatabaseService } from '@services/firebase/auth.firebase.database.service';

const authDatabaseService = new FirebaseAuthDatabaseService();
const authUseCases = new AuthUseCases(authDatabaseService);
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <UseCasesProvider useCases={{ authUseCases }}>
      <AppProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </AppProvider>
    </UseCasesProvider>
  </React.StrictMode>
);
