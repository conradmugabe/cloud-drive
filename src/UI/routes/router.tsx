import { createBrowserRouter, Outlet } from 'react-router-dom';
import FullScreen from '../components/common/FullScreen';
import FolderFiles from '../components/compound/FolderFiles';
import LoginWithProvider from '../components/compound/forms/LoginWithProvider';
import NavBar from '../components/compound/NavBar';
import AuthRootPage from '../pages/AuthRootPage';
import Dashboard from '../pages/Dashboard';
import ErrorPage from '../pages/ErrorPage';
import Landing from '../pages/Landing';

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
      { path: '/', element: <Landing /> },
      {
        path: '/auth/login',
        element: (
          <AuthRootPage>
            <LoginWithProvider />
          </AuthRootPage>
        ),
      },
    ],
  },
]);

export const authenticatedRoutes = createBrowserRouter([
  {
    path: '/',
    element: (
      <FullScreen>
        <NavBar />
        <Outlet />
      </FullScreen>
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
