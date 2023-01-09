import { z } from 'zod';
import { User } from '@entities/user.entity';

const Login = z.object({ email: z.string(), password: z.string() });
type Login = z.infer<typeof Login>;

const Signup = Login;
type Signup = z.infer<typeof Signup>;

const LoginWithProvider = z.object({ provider: z.string() });
type LoginWithProvider = z.infer<typeof LoginWithProvider>;

export type LoginResponse = { user: User; token: string };

export { Login, Signup, LoginWithProvider };
