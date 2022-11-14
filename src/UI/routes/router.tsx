import { createBrowserRouter, Outlet } from 'react-router-dom';
import FullScreen from '../components/common/FullScreen';
import FolderFiles from '../components/compound/FolderFiles';
import NavBar from '../components/compound/NavBar';
import AuthRootPage from '../pages/AuthRootPage';
import Dashboard from '../pages/Dashboard';
import ErrorPage from '../pages/ErrorPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import Landing from '../pages/Landing';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

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
      {
        path: 'auth',
        element: <AuthRootPage />,
        children: [
          { path: 'login', element: <LoginPage /> },
          { path: 'register', element: <RegisterPage /> },
          { path: 'forgot_password', element: <ForgotPasswordPage /> },
        ],
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
