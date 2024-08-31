import {
  FileIcon,
  GridIcon,
  ImageIcon,
  VideoIcon,
} from "@radix-ui/react-icons";

export const OVER_VIEW_STORAGE: Record<string, any> = {
  images: {
    id: 1,
    items: 4,
    progress: 5,
    color: "bg-red-500",
    icon: (
      <ImageIcon className="w-14 h-14 fill-primary bg-red-500 p-3 rounded-lg" />
    ),
  },
  videos: {
    id: 2,
    items: 54,
    progress: 20,
    color: "bg-blue-500",
    icon: (
      <VideoIcon className="w-14 h-14 fill-primary bg-blue-500 p-3 rounded-lg" />
    ),
  },

  documents: {
    id: 3,
    items: 124,
    progress: 40,
    color: "bg-green-500",
    icon: (
      <FileIcon className="w-14 h-14 fill-primary bg-green-500 p-3 rounded-lg" />
    ),
  },
} as const;
