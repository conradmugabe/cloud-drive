import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { useUser } from './UI/context/user-context';
const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));

const App = () => {
  const user = useUser();

  return (
    <ChakraProvider>
      {user?.user ? <AuthenticatedApp /> : <UnauthenticatedApp />};
    </ChakraProvider>
  );
};

export default App;
