import { User } from '@entities/user.entity';
import { Login, LoginResponse, LoginWithProvider } from '@dto/auth.dto';

export abstract class AuthDatabaseService {
  abstract login(props: Login): Promise<LoginResponse>;

  abstract loginWithProvider(props: LoginWithProvider): Promise<LoginResponse>;

  abstract getCurrentUser(): Promise<User>;

  abstract logout(): Promise<void>;
}
