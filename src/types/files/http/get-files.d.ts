import { File, FilesData } from "../";

export type GetFilesSuccessResponse = {
  data: FilesData;
  message: string;
  ok: true;
};

export type GetFilesErrorResponse = {
  ok: false;
  message: string;
};


export type GetFilesResponse = GetFilesSuccessResponse | GetFilesErrorResponse;
