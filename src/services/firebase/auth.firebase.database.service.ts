import {
  AuthProvider,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { Login, LoginResponse, LoginWithProvider, Signup } from '@dto/auth.dto';
import { User } from '@entities/user.entity';
import { AuthDatabaseService } from '@core/services/auth.database.service';
import { auth } from './init';

export class FirebaseDatabaseService implements AuthDatabaseService {
  static Providers: Record<string, AuthProvider> = {
    google: new GoogleAuthProvider(),
  };

  login = async ({ email, password }: Login): Promise<LoginResponse> => {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredentials.user;
    const userObject: User = {
      id: user.uid,
      name: user.displayName || '',
      email: user.email || '',
      profilePicture: user.photoURL || '',
    };
    const token = await user.getIdToken();
    return { token, user: userObject };
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
      FirebaseDatabaseService.Providers[props.provider]
    );
    const credential = GoogleAuthProvider.credentialFromResult(userCredentials);
    const token = credential?.accessToken || '';
    const user = userCredentials.user;
    const userObject: User = {
      id: user.uid,
      name: user.displayName || '',
      email: user.email || '',
      profilePicture: user.photoURL || '',
    };
    return { token, user: userObject };
  };

  getCurrentUser = async (): Promise<User> => {
    const errorMessage = 'Please login to continue';
    onAuthStateChanged(auth, (user) => {
      if (user === null) throw new Error(errorMessage);
    });
    const user = auth.currentUser;
    if (user === null) throw new Error(errorMessage);
    const userObject: User = {
      id: user.uid,
      name: user.displayName || '',
      email: user.email || '',
      profilePicture: user.photoURL || '',
    };
    return userObject;
  };

  logout = () => {
    signOut(auth);
  };
}
