import { AuthState } from ".";

type AuthActionType = {
  type: "[AUTH] - Login";
  payload: { user: any; token: string };
};

export const authReducer = (state: AuthState, action: any): AuthState => {
  switch (action.type) {
    case "[AUTH] - Login":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    default:
      return state;
  }
};
