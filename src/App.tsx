import { ChakraProvider, Spinner } from '@chakra-ui/react';
import React from 'react';
import { useUser } from './UI/context/user-context';
const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));

const App = () => {
  const { user } = useUser();

  return (
    <ChakraProvider>
      {user ? (
        <React.Suspense fallback={<Spinner size="xl" />}>
          <AuthenticatedApp />
        </React.Suspense>
      ) : (
        <React.Suspense fallback={<Spinner size="xl" />}>
          <UnauthenticatedApp />
        </React.Suspense>
      )}
    </ChakraProvider>
  );
};

export default App;
