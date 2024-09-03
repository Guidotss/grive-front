import { useEffect, useMemo, useReducer, type FC } from "react";
import { FilesContext, filesReducer } from ".";
import { eventEmitter, HttpAdapter } from "@/config";
import { FilesData, GetFilesResponse, UploadFilesResponse } from "@/types";
import { useToast } from "@/hooks";
import { ToastAction } from "@radix-ui/react-toast";

interface FilesProviderProps {
  children: React.ReactNode;
}

export interface FilesState {
  filesData: FilesData;
  loading: boolean;
}

const FILES_INITIAL_STATE: FilesState = {
  filesData: {
    files: [],
    documents: 0,
    images: 0,
    videos: 0,
  },
  loading: false,
};

export const FilesProvider: FC<FilesProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(filesReducer, FILES_INITIAL_STATE);
  const httpAdapter = useMemo(() => new HttpAdapter(), []);
  const { toast } = useToast();

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        dispatch({ type: "[FILES] - start loading" });
        const response = await httpAdapter.get<GetFilesResponse>("files");
        if (response.ok) {
          dispatch({ type: "[FILES] - Fetch Files", payload: response.data });
          dispatch({ type: "[FILES] - stop loading" });
          return;
        }
        dispatch({ type: "[FILES] - stop loading" });
        toast({
          variant: "destructive",
          title: "Oops! Something went wrong",
          description: response.message,
          action: <ToastAction altText="Try again">Try Again </ToastAction>,
        });
      } catch (error) {
        dispatch({ type: "[FILES] - stop loading" });
        toast({
          variant: "destructive",
          title: "Oops! Something went wrong",
          description: "We were unable to fetch the files",
          action: <ToastAction altText="Try again">Try Again </ToastAction>,
        });
      }
    };
    eventEmitter.on("[AUTH] - Login", fetchFiles);
    return () => {
      eventEmitter.off("[AUTH] - Login", fetchFiles);
    };
  }, []);

  const uploadFile = async (selectedFile: File) => {
    try {
      dispatch({ type: "[FILES] - start loading" });
      const file = new FormData();

      file.append("file", selectedFile); // Fieldname is required

      const response = await httpAdapter.post<UploadFilesResponse>(
        "files/upload",
        file,
      );
      if (response.ok) {
        dispatch({ type: "[FILES] - Upload Files", payload: response.data });
        dispatch({ type: "[FILES] - stop loading" });
        return;
      }
      dispatch({ type: "[FILES] - stop loading" });
      toast({
        variant: "destructive",
        title: "Oops! Something went wrong",
        description: response.message,
        action: <ToastAction altText="Try again">Try Again </ToastAction>,
      });
    } catch (error) {
      dispatch({ type: "[FILES] - stop loading" });
      toast({
        variant: "destructive",
        title: "Oops! Something went wrong",
        description: "We were unable to upload the file",
        action: <ToastAction altText="Try again">Try Again </ToastAction>,
      });
    }
  };

  return (
    <FilesContext.Provider
      value={{
        ...state,

        uploadFile,
      }}
    >
      {children}
    </FilesContext.Provider>
  );
};
