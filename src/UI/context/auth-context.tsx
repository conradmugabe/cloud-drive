import React from 'react';
import { User } from '../interfaces/User';

interface AuthContextProps {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  register: (user: User) => void;
}

type Props = {
  children: React.ReactNode;
};

const AuthContext = React.createContext<AuthContextProps | null>(null);

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw Error('useAuth must be used inside AuthContextProvider');
  }
  return context;
};

const AuthProvider = (props: Props) => {
  const [user, setUser] = React.useState<User | null>(null);

  // get user token from local storage.
  // if token? ping the server to see if the token is valid.
  // if token is valid? setUser
  //

  const login = (user: User) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  const register = (user: User) => {
    setUser(user);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register }}
      {...props}
    />
  );
};

export { AuthProvider, useAuth };
