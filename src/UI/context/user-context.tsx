import React from 'react';
import { User } from '../interfaces/User';

type UserContextProps = {
  user: User | null;
  setUser: (user: User | null) => void;
};

type Props = {
  children: React.ReactNode;
};

const UserContext = React.createContext<UserContextProps | null>(null);

const useUser = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw Error('useUser must be used inside UserContextProvider');
  }
  return context;
};

const UserProvider = (props: Props) => {
  const [user, setUser] = React.useState<User | null>(null);

  return <UserContext.Provider value={{ user, setUser }} {...props} />;
};

export { UserProvider, useUser };
