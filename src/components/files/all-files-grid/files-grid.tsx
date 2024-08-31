"use client";
import { FilesContext } from "@/context";
import { useContext } from "react";
import { FileCard } from "./file-card";

export const FilesGrid = () => {
  const { filesData } = useContext(FilesContext);
  console.log(filesData?.files);
  return (
    <section className="grid grid-cols-4 p-10 gap-5">
      {filesData?.files.map((file) => (
        <FileCard key={file.id} fileInfo={file} />
      ))}
    </section>
  );
};
