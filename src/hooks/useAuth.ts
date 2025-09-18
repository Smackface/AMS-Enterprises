import { useUserStore } from '../stores/userStore';
import { User } from '../stores/userStore';
import { useEffect } from 'react';

export const useAuth = () => {
  const user = useUserStore((state) => state.user);
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  const isLoading = useUserStore((state) => state.isLoading);
  const loginUser = useUserStore((state) => state.loginUser);
  const logoutUser = useUserStore((state) => state.logoutUser);
  const updateUser = useUserStore((state) => state.updateUser);
  const setLoading = useUserStore((state) => state.setLoading);
  const signInWithAmplify = useUserStore((state) => state.signInWithAmplify);
  const signOutWithAmplify = useUserStore((state) => state.signOutWithAmplify);
  const signUpWithAmplify = useUserStore((state) => state.signUpWithAmplify);
  const confirmSignUpWithAmplify = useUserStore((state) => state.confirmSignUpWithAmplify);
  const checkAuthStatus = useUserStore((state) => state.checkAuthStatus);

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  const login = async (user: User) => {
    setLoading(true);
    try {
      loginUser(user);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithAmplify(email, password);
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOutWithAmplify();
    } catch (error) {
      await logoutUser();
      throw error;
    }
  };

  const updateProfile = (userData: Partial<User>) => {
    updateUser(userData);
  };

  const signUp = async (email: string, password: string, name: string) => {
    try {
      const result = await signUpWithAmplify(email, password, name);
      return result;
    } catch (error) {
      throw error;
    }
  };

  const confirmSignUp = async (email: string, code: string) => {
    try {
      await confirmSignUpWithAmplify(email, code);
    } catch (error) {
      throw error;
    }
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    signIn,
    signUp,
    confirmSignUp,
    logout,
    updateProfile,
    setLoading,
    checkAuthStatus,
  };
};