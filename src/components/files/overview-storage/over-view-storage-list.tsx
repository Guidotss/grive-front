"use client";

import { FilesContext } from "@/context";
import { useContext } from "react";
import { OVER_VIEW_STORAGE } from "@/constants";
import { OverViewStorageCard } from "./over-view-storage-card";

export const OverViewStorageList = () => {
  const { filesData } = useContext(FilesContext);
  const { files, ...rest } = filesData ?? {};
  return (
    <section className="p-10">
      <h5 className="font-light text-gray-300 mb-2">Overview Storage</h5>
      <div
        className="grid grid-cols-4 gap-x-10"
        
      >
        {Object.entries(rest).map(([key, item]) => (
          <OverViewStorageCard
            key={key}
            fileType={key}
            item={item}
          />
        ))}
      </div>
    </section>
  );
};
