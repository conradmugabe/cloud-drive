import { requests } from '@config/axiosClient';
import { AuthDatabaseService } from '@core/services/auth.database.service';
import { User } from '@entities/user.entity';
import { Login, LoginResponse, LoginWithProvider, Signup } from '@dto/auth.dto';

export class ApiAuthDatabaseService implements AuthDatabaseService {
  private URL = 'https://snfimsbackend.herokuapp.com/api/v1/';

  private routes = {
    auth: `${this.URL}users`,
    authRoutes: {
      login: '/login',
      currentUser: '/currentUser',
      signup: '/signup',
    },
  };

  login = async (props: Login): Promise<LoginResponse> => {
    const route = this.routes.auth + this.routes.authRoutes.login;
    await requests.post(route, props);
    return {
      token: 'some random token',
      user: {
        id: '1',
        name: 'John Doe',
        email: 'johndoe@mail.com',
        profilePicture: 'https://randomuser.me/api/portraits/',
      },
    };
  };

  signup = (props: Signup): Promise<Pick<LoginResponse, 'token'>> => {
    const route = this.routes.auth + this.routes.authRoutes.signup;
    return requests.post(route, props);
  };

  loginWithProvider = (props: LoginWithProvider): Promise<LoginResponse> => {
    const route = this.routes.auth + this.routes.authRoutes.login;
    return requests.post(route, props);
  };

  getCurrentUser = async (): Promise<User> => {
    const route = this.routes.auth + this.routes.authRoutes.currentUser;
    return requests.get(route);
  };

  logout = async (): Promise<void> => {};
}
