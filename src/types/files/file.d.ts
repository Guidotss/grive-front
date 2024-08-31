import { FileType } from "./file-type";

export type File = {
  id: string;
  title: string;
  url: string;
  userId: string;
  fileType: FileType;
  createdAt: string;
  updatedAt: string;
  key: string;
};
