import { ChakraProvider, Spinner } from '@chakra-ui/react';
import React from 'react';
import { useUser } from '@context/user.context';
import { useAuth } from '@cache/users';
const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));

const App = () => {
  const { user } = useUser();
  const { useCurrentUser } = useAuth();
  const { isLoading } = useCurrentUser();

  if (isLoading) return <Spinner size="xl" />;

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
