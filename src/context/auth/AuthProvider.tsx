"use client";
import { useReducer, type FC } from "react";
import { AuthContext, authReducer } from ".";

interface AuthProviderProps {
  children: React.ReactNode;
}

export interface AuthState {
  user: any | null;
  token: string | null;
}

const AUTH_INITIAL_STATE: AuthState = {
  user: null,
  token: null,
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

  const login = async (user: any) => {};
  const register = async (user: any) => {};
  const logout = () => {};

  return (
    <AuthContext.Provider
      value={{
        ...state,

        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
