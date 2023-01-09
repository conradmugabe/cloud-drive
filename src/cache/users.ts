import { useMutation, useQuery } from '@tanstack/react-query';
import { useToken } from '@context/token.context';
import { useUser } from '@context/user.context';
import { useUseCases } from '@context/use.cases.context';

export const useAuth = () => {
  const { authUseCases } = useUseCases();
  const { setToken } = useToken();
  const { setUser } = useUser();

  const useLoginWithProvider = () => {
    const { mutate, isLoading, isError } = useMutation({
      mutationFn: authUseCases.loginWithProvider,
      onSuccess: ({ token, user }) => {
        setToken(token);
        setUser(user);
      },
    });
    return { mutate, isLoading, isError };
  };

  const useLogin = () => {
    const { mutate, isLoading, isError } = useMutation({
      mutationFn: authUseCases.login,
      onSuccess: ({ token, user }) => {
        setToken(token);
        setUser(user);
      },
    });
    return { mutate, isLoading, isError };
  };

  const useCurrentUser = () => {
    const { isLoading } = useQuery({
      queryFn: authUseCases.getCurrentUser,
      onSuccess: (user) => {
        setUser(user);
      },
      refetchOnWindowFocus: false,
    });
    return { isLoading };
  };

  return { useLoginWithProvider, useCurrentUser, useLogin };
};
