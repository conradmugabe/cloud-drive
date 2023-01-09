import React from 'react';
import { AUTH_TOKEN } from '@config/constants';
import { Token } from '@entities/token.entity';
import { useLocalStorage } from '@hooks/useLocalStorage';

type TokenContextProps = {
  token: Token;
  setToken: (token: Token) => void;
};

type Props = {
  children: React.ReactNode;
};

const TokenContext = React.createContext<TokenContextProps | null>(null);

const useToken = () => {
  const context = React.useContext(TokenContext);
  if (!context) {
    throw Error('useToken must be used inside TokenContextProvider');
  }
  return context;
};

const TokenProvider = (props: Props) => {
  const [token, setToken] = useLocalStorage<Token>(AUTH_TOKEN);

  return <TokenContext.Provider value={{ token, setToken }} {...props} />;
};

export { TokenProvider, useToken };
