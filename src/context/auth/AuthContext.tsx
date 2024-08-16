"use client";
import { createContext } from "react";

interface AuthContextProps {
  user: any | null;
  token: string | null;
  login: (user: any) => Promise<void>;
  register: (user: any) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);
