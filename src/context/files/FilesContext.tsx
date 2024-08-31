"use client";
import { createContext } from "react";

interface FilesContextProps {
  files: any;
  loading: boolean;
}

export const FilesContext = createContext({} as FilesContextProps);
