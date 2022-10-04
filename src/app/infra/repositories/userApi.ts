import UserRepository from '../../useCases/interfaces/userRepository';
import { UserUseCases } from '../../useCases/User';
import requests from './helpers/axios';

export default class UserApi implements UserRepository {
  constructor(readonly baseUrl: string) {}

  login(props: UserUseCases.LoginRequest): Promise<UserUseCases.LoginResponse> {
    return requests.post(this.baseUrl, props);
  }

  logout(
    token: UserUseCases.LogoutRequest
  ): Promise<UserUseCases.LogoutResponse> {
    return requests.post(this.baseUrl, token);
  }

  signup(
    props: UserUseCases.SignupRequest
  ): Promise<UserUseCases.SignupResponse> {
    return requests.post(this.baseUrl, props);
  }

  getUser(
    token: UserUseCases.GetUserRequest
  ): Promise<UserUseCases.GetUserResponse> {
    return requests.get(this.baseUrl);
  }
}
