import { UserUseCases } from '../User';

export default interface UserRepository {
  login(props: UserUseCases.LoginRequest): Promise<UserUseCases.LoginResponse>;
  logout(
    token: UserUseCases.LogoutRequest
  ): Promise<UserUseCases.LogoutResponse>;
  signup(
    props: UserUseCases.SignupRequest
  ): Promise<UserUseCases.SignupResponse>;
  getUser(
    token: UserUseCases.GetUserRequest
  ): Promise<UserUseCases.GetUserResponse>;
}
