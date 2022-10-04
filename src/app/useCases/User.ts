import User from '../entities/User';
import UserRepository from './interfaces/userRepository';

export class UserUseCases {
  constructor(readonly repository: UserRepository) {}

  login(props: UserUseCases.LoginRequest): Promise<UserUseCases.LoginResponse> {
    return this.repository.login(props);
  }

  logout(token: UserUseCases.LogoutRequest): Promise<UserUseCases.LogoutResponse> {
    return this.repository.logout(token);
  }

  signUp(
    props: UserUseCases.SignupRequest
  ): Promise<UserUseCases.SignupResponse> {
    return this.repository.signup(props);
  }

  getUser(
    token: UserUseCases.GetUserRequest
  ): Promise<UserUseCases.GetUserResponse> {
    return this.repository.getUser(token);
  }
}

export namespace UserUseCases {
  export type Token = string;
  export type LoginRequest = Pick<User, 'email' | 'password'>;
  export type LoginResponse = Token;
  export type SignupRequest = Pick<User, 'name' | 'email' | 'password'>;
  export type SignupResponse = void;
  export type GetUserRequest = Token;
  export type GetUserResponse = User;
  export type LogoutRequest = Token;
  export type LogoutResponse = void;
}
