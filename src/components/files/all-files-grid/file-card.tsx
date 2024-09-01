"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarIcon, FileIcon, LinkIcon, Clock } from "lucide-react";
import { File } from "@/types";
import * as pdfjsLib from "pdfjs-dist";
import "animate.css";

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export const FileCard = ({ fileInfo }: { fileInfo: File }) => {
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  useEffect(() => {
    const generatePreview = async () => {
      if (fileInfo.fileType.category.includes("document")) {
        const loadingTask = pdfjsLib.getDocument(fileInfo.url);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);
        const scale = 1.5;
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };
        await page.render(renderContext as any).promise;
        setPreviewSrc(canvas.toDataURL());
      } else if (fileInfo.fileType.category.includes("image")) {
        setPreviewSrc(fileInfo.url);
      } else if (fileInfo.fileType.category.includes("video")) {
        setPreviewSrc(fileInfo.url);
      } else {
        setPreviewSrc(null);
      }
    };
    generatePreview();
  }, [fileInfo]);

  return (
    <Card className="w-full max-w-md bg-[#1a1a1a] border-[#2a2a2a] border shadow-lg animate__animated animate__fadeIn hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="pb-2 overflow-x-clip">
        <CardTitle className="flex items-center gap-2 text-lg font-medium text-gray-200 text-ellipsis full">
          <FileIcon className="h-5 w-5 text-blue-400" />
          <h4 className="text-balance">
            {fileInfo.title.split(".")[0].slice(0, 20)}...
          </h4>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="aspect-video relative overflow-hidden rounded-md bg-[#252525]">
          {fileInfo.fileType.category.includes("image") && previewSrc && (
            <Image
              src={previewSrc}
              alt={fileInfo.title}
              layout="fill"
              objectFit="cover"
            />
          )}
          {fileInfo.fileType.category.includes("document") && previewSrc && (
            <Image
              src={previewSrc}
              alt={fileInfo.title}
              layout="fill"
              objectFit="cover"
            />
          )}
          {fileInfo.fileType.category.includes("video") && previewSrc && (
            <video controls className="w-full h-full object-cover">
              <source src={previewSrc} type={fileInfo.fileType.category} />
              Your browser does not support the video tag.
            </video>
          )}
          {!previewSrc && (
            <div className="flex items-center justify-center h-full text-gray-400">
              No preview available
            </div>
          )}
        </div>
        <div className="space-y-2 min-h-32 mt-2">
          <div className="flex flex-col justify-center items-start gap-2 flex-wrap">
            <Badge variant="secondary" className="bg-blue-600 text-white">
              {fileInfo.fileType.category}
            </Badge>
            <Badge variant="outline" className="text-gray-300 border-gray-600">
              {fileInfo.key}
            </Badge>
          </div>
          <div className="text-xs text-gray-400 flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            <span>Created: {formatDate(fileInfo.createdAt)}</span>
          </div>
          <div className="text-xs text-gray-400 flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Updated: {formatDate(fileInfo.updatedAt)}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="">
        <Button
          variant="default"
          className="w-full bg-orange-600 hover:bg-orange-700 text-white"
          asChild
        >
          <a href={fileInfo.url} target="_blank" rel="noopener noreferrer">
            <LinkIcon className="h-4 w-4 mr-2" />
            Open File
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};
