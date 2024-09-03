"use client";
import { useEffect, useMemo, useReducer, type FC } from "react";
import Cookies from "js-cookie";
import { AuthContext, authReducer } from ".";
import type {
  RegisterForm as RegisterDto,
  LoginForm as LoginDto,
  AuthResponse,
  AuthSuccessResponse,
} from "@/types";
import { eventEmitter, HttpAdapter } from "@/config";

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
  const httpAdapter = useMemo(() => new HttpAdapter(), []);

  const authorize = (response: AuthSuccessResponse) => {
    dispatch({ type: "[AUTH] - Login", payload: response });
    Cookies.set("token", response.token);
    eventEmitter.emit("[AUTH] - Login");
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      httpAdapter.get<AuthResponse>("auth/refresh-token").then((response) => {
        if (response.ok) {
          authorize(response);
        } else {
          Cookies.remove("token");
        }
      });
    }
  }, []);

  const login = async (user: LoginDto): Promise<boolean> => {
    try {
      const response = await httpAdapter.post<AuthResponse>(
        "auth/login",
        user,
        {
          "Content-Type": "application/json",
        }
      );
      if (response.ok) {
        authorize(response);
        return true;
      }
      Cookies.remove("token");
      return false;
    } catch (error) {
      console.log(error);
      Cookies.remove("token");
      return false;
    }
  };
  const register = async (user: RegisterDto): Promise<boolean> => {
    try {
      const response = await httpAdapter.post<AuthResponse>(
        "auth/register",
        user,
        {
          "Content-Type": "application/json",
        }
      );
      if (response.ok) {
        authorize(response);
        return true;
      }
      Cookies.remove("token");
      return false;
    } catch (error) {
      console.log(error);
      Cookies.remove("token");
      return false;
    }
  };
  const logout = () => {
    dispatch({ type: "[AUTH] - Logout" });
    Cookies.remove("token");
  };

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
