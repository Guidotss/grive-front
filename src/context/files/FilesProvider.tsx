import { useReducer, type FC } from "react";
import { FilesContext, filesReducer } from ".";

interface FilesProviderProps {
  children: React.ReactNode;
}

export interface FilesState {
  files: any;
  loading: boolean;
}

const FILES_INITIAL_STATE: FilesState = {
  files: [],
  loading: false,
};

export const FilesProvider: FC<FilesProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(filesReducer, FILES_INITIAL_STATE);

  return (
    <FilesContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </FilesContext.Provider>
  );
};
