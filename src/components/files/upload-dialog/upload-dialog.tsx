"use client";

import { useState, useRef, useContext } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, File as FileIcon } from "lucide-react";
import Image from "next/image";
import { PlusIcon } from "@radix-ui/react-icons";
import { FilesContext } from "@/context";

export function UploadDialog() {
  const { uploadFile } = useContext(FilesContext);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      if (selectedFile.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(selectedFile);
      } else if (selectedFile.type === "application/pdf") {
        setPreview("/placeholder.svg?height=200&width=200");
      } else if (selectedFile.type.startsWith("video/")) {
        setPreview("/placeholder.svg?height=200&width=200");
      } else {
        setPreview(null);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      setFile(droppedFile);
      if (fileInputRef.current) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(droppedFile);
        fileInputRef.current.files = dataTransfer.files;
      }
      handleFileChange({
        target: { files: [droppedFile] },
      } as unknown as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const handleUpload = async () => {
    if (file) {
      await uploadFile(file);

      setFile(null);
      setPreview(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-sm flex items-center p-5">
          <PlusIcon className="w-5 h-5 fill-primary mr-2" />
          <span className="text-lg font-light">Create</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Subir Archivo</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-gray-400 transition-colors"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <Input
              id="file"
              type="file"
              className="hidden"
              onChange={handleFileChange}
              ref={fileInputRef}
              accept="image/*,application/pdf,video/*"
            />
            <Label htmlFor="file" className="cursor-pointer">
              {file ? (
                <span className="text-sm text-gray-500">{file.name}</span>
              ) : (
                <div className="flex flex-col items-center">
                  <Upload className="h-10 w-10 text-gray-400" />
                  <span className="mt-2 text-sm text-gray-500">
                    Arrastra y suelta un archivo aquí, o haz clic para
                    seleccionar
                  </span>
                </div>
              )}
            </Label>
          </div>
          {preview && (
            <div className="relative aspect-video">
              {file?.type.startsWith("image/") ? (
                <Image
                  src={preview}
                  alt="Vista previa"
                  layout="fill"
                  objectFit="contain"
                />
              ) : file?.type === "application/pdf" ? (
                <div className="flex items-center justify-center h-full bg-gray-100">
                  <FileIcon className="h-16 w-16 text-gray-400" />
                  <span className="ml-2 text-sm text-gray-500">
                    Vista previa de PDF no disponible
                  </span>
                </div>
              ) : file?.type.startsWith("video/") ? (
                <video controls className="w-full h-full">
                  <source src={URL.createObjectURL(file)} type={file.type} />
                  Tu navegador no soporta el tag de video.
                </video>
              ) : null}
            </div>
          )}
        </div>
        <div className="flex justify-end space-x-2">
          <Button
            variant="outline"
            onClick={() => {
              setFile(null);
              setPreview(null);
              if (fileInputRef.current) {
                fileInputRef.current.value = "";
              }
            }}
          >
            Cancelar
          </Button>
          <Button onClick={handleUpload} disabled={!file}>
            Subir
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
