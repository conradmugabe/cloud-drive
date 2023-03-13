import {
  AuthProvider,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User as FirebaseUser,
} from 'firebase/auth';
import { Login, LoginResponse, LoginWithProvider, Signup } from '@dto/auth.dto';
import { User } from '@entities/user.entity';
import { AuthDatabaseService } from '@core/services/auth.database.service';
import { auth } from './init';

export class FirebaseAuthDatabaseService implements AuthDatabaseService {
  static Providers: Record<string, AuthProvider> = {
    google: new GoogleAuthProvider(),
  };

  private constructUserObject = (user: FirebaseUser): User => ({
    id: user.uid,
    name: user.displayName || '',
    email: user.email || '',
    profilePicture: user.photoURL || '',
  });

  login = async ({ email, password }: Login): Promise<LoginResponse> => {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = this.constructUserObject(userCredentials.user);
    const token = await userCredentials?.user?.getIdToken();
    return { token, user };
  };

  signup = async ({ email, password }: Signup): Promise<void> => {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredentials.user;
  };

  loginWithProvider = async (
    props: LoginWithProvider
  ): Promise<LoginResponse> => {
    const userCredentials = await signInWithPopup(
      auth,
      FirebaseAuthDatabaseService.Providers[props.provider]
    );
    const credential = GoogleAuthProvider.credentialFromResult(userCredentials);
    const token = credential?.accessToken || '';
    const user = this.constructUserObject(userCredentials.user);
    return { token, user };
  };

  getCurrentUser = async (): Promise<User> => {
    const errorMessage = 'Please login to continue';
    onAuthStateChanged(auth, (user) => {
      if (user === null) throw new Error(errorMessage);
    });
    const user = auth.currentUser;
    if (user === null) throw new Error(errorMessage);
    return this.constructUserObject(user);
  };

  logout = async (): Promise<void> => {
    await signOut(auth);
  };
}
