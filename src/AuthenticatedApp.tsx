import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { authenticatedRoutes } from './UI/routes/router';

const AuthenticatedApp = () => {
  return <RouterProvider router={authenticatedRoutes}></RouterProvider>;
};

export default AuthenticatedApp;
