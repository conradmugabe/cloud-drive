import React from 'react';
import { useUser } from './context/user-context';
const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));

const App = () => {
  const user = useUser();

  console.log('rendering App');

  return user?.user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default App;
