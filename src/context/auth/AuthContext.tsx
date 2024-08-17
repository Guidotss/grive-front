"use client";
import type {
  LoginForm as LoginDto,
  RegisterForm as RegisterDto,
} from "@/types";
import { createContext } from "react";

interface AuthContextProps {
  user: any | null;
  token: string | null;
  login: (user: LoginDto) => Promise<boolean>;
  register: (user: RegisterDto) => Promise<boolean>;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);
