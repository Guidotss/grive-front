import { User } from "@/types/user";

type AuthSuccessResponse = {
  ok: true;
  user: User;
  token: string;
};

type AuthErrorResponse = {
  ok: false;
  message: string;
};

export type AuthResponse = AuthSuccessResponse | AuthErrorResponse;
