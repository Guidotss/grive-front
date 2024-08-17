import { User } from "@/types/user";
import { AuthState } from ".";

type AuthActionType =
  | {
      type: "[AUTH] - Login";
      payload: { user: User; token: string };
    }
  | {
      type: "[AUTH] - Logout";
    };

export const authReducer = (
  state: AuthState,
  action: AuthActionType
): AuthState => {
  switch (action.type) {
    case "[AUTH] - Login":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "[AUTH] - Logout":
      return {
        ...state,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};
