import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getCurrentUser, signIn, signOut, signUp, confirmSignUp, AuthUser } from 'aws-amplify/auth';

export interface User {
  id: string;
  name: string;
  email: string;
  authUser?: AuthUser;
}

export interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface UserActions {
  updateUser: (userData: Partial<User>) => void;
  loginUser: (user: User) => void;
  logoutUser: () => Promise<void>;
  setLoading: (loading: boolean) => void;
  signInWithAmplify: (email: string, password: string) => Promise<void>;
  signOutWithAmplify: () => Promise<void>;
  signUpWithAmplify: (email: string, password: string, name: string) => Promise<{ nextStep: any }>;
  confirmSignUpWithAmplify: (email: string, code: string) => Promise<void>;
  checkAuthStatus: () => Promise<void>;
}

export type UserStore = UserState & UserActions;

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
};

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      ...initialState,

      updateUser: (userData: Partial<User>) => {
        const currentUser = get().user;
        if (currentUser) {
          set({
            user: {
              ...currentUser,
              ...userData,
            },
          });
        }
      },

      loginUser: (user: User) => {
        set({
          user,
          isAuthenticated: true,
          isLoading: false,
        });
      },

      logoutUser: async () => {
        set({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading });
      },

      signInWithAmplify: async (email: string, password: string) => {
        set({ isLoading: true });
        try {
          const { isSignedIn } = await signIn({ username: email, password });
          if (isSignedIn) {
            const authUser = await getCurrentUser();
            const user: User = {
              id: authUser.userId,
              name: authUser.username,
              email: email,
              authUser,
            };
            set({
              user,
              isAuthenticated: true,
              isLoading: false,
            });
          }
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      signOutWithAmplify: async () => {
        set({ isLoading: true });
        try {
          await signOut();
          set({
            user: null,
            isAuthenticated: false,
            isLoading: false,
          });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      signUpWithAmplify: async (email: string, password: string, name: string) => {
        set({ isLoading: true });
        try {
          const { nextStep } = await signUp({
            username: email,
            password,
            options: {
              userAttributes: {
                email,
                name,
              },
            },
          });
          set({ isLoading: false });
          return { nextStep };
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      confirmSignUpWithAmplify: async (email: string, code: string) => {
        set({ isLoading: true });
        try {
          await confirmSignUp({
            username: email,
            confirmationCode: code,
          });
          set({ isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      checkAuthStatus: async () => {
        set({ isLoading: true });
        try {
          const authUser = await getCurrentUser();
          const user: User = {
            id: authUser.userId,
            name: authUser.username,
            email: authUser.signInDetails?.loginId || '',
            authUser,
          };
          set({
            user,
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          set({
            user: null,
            isAuthenticated: false,
            isLoading: false,
          });
        }
      },
    }),
    {
      name: 'user-store',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);