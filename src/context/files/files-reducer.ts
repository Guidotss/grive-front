import { FilesState } from ".";

type FilesActionType = { type: "[FILES] - Fetch Files" };

export const filesReducer = (
  state: FilesState,
  action: FilesActionType
): FilesState => {
  switch (action.type) {
    case "[FILES] - Fetch Files":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
