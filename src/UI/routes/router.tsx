import { createBrowserRouter, Outlet } from 'react-router-dom';
import FolderFiles from '../components/compound/FolderFiles';
import NavBar from '../components/compound/NavBar';
import Dashboard from '../pages/Dashboard';
import ErrorPage from '../pages/ErrorPage';
import Landing from '../pages/Landing';
import LoginPage from '../pages/LoginPage';

export const unauthenticatedRoutes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <NavBar />
        <Outlet />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <Landing /> },
      { path: 'login', element: <LoginPage /> },
    ],
  },
]);

export const authenticatedRoutes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <NavBar />
        <Outlet />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Dashboard />,
        children: [
          { path: '', element: <FolderFiles /> },
          { path: 'folder/:folderId', element: <FolderFiles /> },
        ],
      },
    ],
  },
]);
