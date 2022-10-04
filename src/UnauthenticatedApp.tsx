import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Footer from './components/compound/Footer';
import NavBar from './components/compound/NavBar';
import Landing from './pages/Landing';
import LoginPage from './pages/LoginPage';

const UnauthenticatedApp = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
            <Footer />
          </>
        }
      >
        <Route index element={<Landing />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default UnauthenticatedApp;
