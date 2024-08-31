"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarIcon, FileIcon, LinkIcon } from "lucide-react";
import Image from "next/image";
import { File } from "@/types";
import { useEffect, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";

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

  console.log("PREVIEW",previewSrc);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileIcon className="h-5 w-5" />
          {fileInfo.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="aspect-video relative overflow-hidden rounded-md">
          {fileInfo.fileType.category.includes("image") && previewSrc && (
            <Image
              src={previewSrc}
              alt={fileInfo.title}
              layout="fill"
              objectFit="cover"
            />
          )}
          {fileInfo.fileType.category.includes("pdf") && previewSrc && (
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
            <div className="flex items-center justify-center h-full text-muted-foreground">
              No preview available
            </div>
          )}
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{fileInfo.fileType.category}</Badge>
            <Badge variant="outline">{fileInfo.key}</Badge>
          </div>
          <div className="text-sm text-muted-foreground">
            <CalendarIcon className="inline-block h-4 w-4 mr-1" />
            Created: {formatDate(fileInfo.createdAt)}
          </div>
          <div className="text-sm text-muted-foreground">
            <CalendarIcon className="inline-block h-4 w-4 mr-1" />
            Updated: {formatDate(fileInfo.updatedAt)}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <a href={fileInfo.url} target="_blank" rel="noopener noreferrer">
            <LinkIcon className="h-4 w-4 mr-2" />
            Open File
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};
