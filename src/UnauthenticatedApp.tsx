import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { unauthenticatedRoutes } from './UI/routes/router';

const UnauthenticatedApp = () => {
  return <RouterProvider router={unauthenticatedRoutes}></RouterProvider>;
};

export default UnauthenticatedApp;
