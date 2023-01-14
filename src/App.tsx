import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { useUser } from '@context/user.context';
import { useAuth } from '@cache/users';
import FullPageSpinner from './UI/pages/FullPageSpinner';
const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));

const App = () => {
  const { user } = useUser();
  const { useCurrentUser } = useAuth();
  const { isLoading } = useCurrentUser();

  if (isLoading) return <FullPageSpinner />;

  return (
    <ChakraProvider>
      {user ? (
        <React.Suspense fallback={<FullPageSpinner />}>
          <AuthenticatedApp />
        </React.Suspense>
      ) : (
        <React.Suspense fallback={<FullPageSpinner />}>
          <UnauthenticatedApp />
        </React.Suspense>
      )}
    </ChakraProvider>
  );
};

export default App;
