import { User } from '@entities/user.entity';
import { AuthDatabaseService } from '@core/services/auth.database.service';
import { Login, LoginResponse, LoginWithProvider } from '@dto/auth.dto';

export class AuthUseCases {
  constructor(private databaseService: AuthDatabaseService) {}

  login = (props: Login): Promise<LoginResponse> => {
    return this.databaseService.login(props);
  };

  loginWithProvider = (props: LoginWithProvider): Promise<LoginResponse> => {
    return this.databaseService.loginWithProvider(props);
  };

  getCurrentUser = (): Promise<User> => {
    return this.databaseService.getCurrentUser();
  };

  logout = (): Promise<void> => {
    return this.databaseService.logout();
  };
}
