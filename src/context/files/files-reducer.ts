import { File, FilesData } from "@/types";
import { FilesState } from ".";

type FilesActionType =
  | {
      type: "[FILES] - Fetch Files";
      payload: FilesData;
    }
  | {
      type: "[FILES] - start loading";
    }
  | {
      type: "[FILES] - stop loading";
    };

export const filesReducer = (
  state: FilesState,
  action: FilesActionType
): FilesState => {
  switch (action.type) {
    case "[FILES] - Fetch Files":
      return {
        ...state,
        filesData: action.payload,
      };
    case "[FILES] - start loading":
      return {
        ...state,
        loading: true,
      };
    case "[FILES] - stop loading":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
