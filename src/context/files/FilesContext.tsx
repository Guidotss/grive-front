"use client";
import { FilesData } from "@/types";
import { createContext } from "react";

interface FilesContextProps {
  filesData: FilesData | null;
  loading: boolean;
}

export const FilesContext = createContext({} as FilesContextProps);
