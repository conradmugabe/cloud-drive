import React from 'react';
import { User } from '../interfaces/User';

type UserContextProps = {
  user: User | null;
  setUser: (user: User | null) => void;
};

const userData: User = {
  id: '1',
  name: 'John Doe',
  email: 'johndoe@mail.com',
  profilePicture: 'https://randomuser.me/api/portraits/',
};

type Props = {
  children: React.ReactNode;
};

const UserContext = React.createContext<UserContextProps | null>(null);

const useUser = () => React.useContext(UserContext);

const UserProvider = (props: Props) => {
  const [user, setUser] = React.useState<User | null>(userData);

  console.log('rendering UserProvider');

  return <UserContext.Provider value={{ user, setUser }} {...props} />;
};

export { UserProvider, useUser };
