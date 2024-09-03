import { File } from "../file";

export type UploadFilesSuccessResponse = {
  ok: true;
  message: string;
  data: File;
};

export type UploadFilesErrorResponse = {
  ok: false;
  message: string;
};

export type UploadFilesResponse =
  | UploadFilesSuccessResponse
  | UploadFilesErrorResponse;
