import { File, FilesData } from "@/types";
import { FilesState } from ".";

type FilesActionType =
  | {
      type: "[FILES] - Fetch Files";
      payload: FilesData;
    }
  | {
      type: "[FILES] - Upload Files";
      payload: File;
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
    case "[FILES] - Upload Files":
      const newFilesQuantity =
        (state.filesData[
          `${action.payload.fileType.category}s` as keyof FilesData
        ] as number) + 1;
      return {
        ...state,
        filesData: {
          ...state.filesData,
          [action.payload.fileType.category + "s"]: newFilesQuantity,
          files: [...state.filesData.files, action.payload],
        },
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
