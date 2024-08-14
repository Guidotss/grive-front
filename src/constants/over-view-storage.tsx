import {
  FileIcon,
  GridIcon,
  ImageIcon,
  VideoIcon,
} from "@radix-ui/react-icons";

export const OVER_VIEW_STORAGE = [
  {
    id: 1,
    title: "Images",
    items: 4,
    progress: 5,
    color: "bg-red-500",
    icon: (
      <ImageIcon className="w-14 h-14 fill-primary bg-red-500 p-3 rounded-lg" />
    ),
  },
  {
    id: 2,
    title: "Videos",
    items: 54,
    progress: 20,
    color: "bg-blue-500",
    icon: (
      <VideoIcon className="w-14 h-14 fill-primary bg-blue-500 p-3 rounded-lg" />
    ),
  },
  {
    id: 3,
    title: "Documents",
    items: 124,
    progress: 40,
    color: "bg-green-500",
    icon: (
      <FileIcon className="w-14 h-14 fill-primary bg-green-500 p-3 rounded-lg" />
    ),
  },
  {
    id: 4,
    title: "Others",
    items: 212,
    progress: 80,
    color: "bg-yellow-500",
    icon: (
      <GridIcon className="w-14 h-14 fill-primary bg-yellow-500 p-3 rounded-lg" />
    ),
  },
] as const;
