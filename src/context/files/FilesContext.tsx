"use client";
import { FilesData } from "@/types";
import { createContext } from "react";

interface FilesContextProps {
  files: FilesData;
  loading: boolean;
}

export const FilesContext = createContext({} as FilesContextProps);
