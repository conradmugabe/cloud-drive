import { UserUseCases } from '../../useCases/User';
import UserApi from '../repositories/userApi';

const api = new UserApi('http://localhost:4000/api/v1/');
const userUseCases = new UserUseCases(api);

export default class UserController {
  static login(props: UserUseCases.LoginRequest) {
    return userUseCases.login(props);
  }

  static logout(props: UserUseCases.LogoutRequest) {
    return userUseCases.logout(props);
  }

  static getUser(props: UserUseCases.GetUserRequest) {
    return userUseCases.getUser(props);
  }

  static signup(props: UserUseCases.SignupRequest) {
    return userUseCases.signUp(props);
  }
}
