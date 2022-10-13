import { createBrowserRouter } from 'react-router-dom';
import NavBar from '../components/compound/NavBar';
import Dashboard from '../pages/Dashboard';
import Landing from '../pages/Landing';
import LoginPage from '../pages/LoginPage';

export const unauthenticatedRoutes = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />,
    children: [
      { path: '', element: <Landing /> },
      { path: 'login', element: <LoginPage /> },
    ],
  },
  { path: '/', element: <Landing /> },
  { path: '/login', element: <LoginPage /> },
]);

export const authenticatedRoutes = createBrowserRouter([
  { path: '/', element: <Dashboard /> },
]);
