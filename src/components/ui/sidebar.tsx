import {
  ChevronRightIcon,
  ClockIcon,
  CodeSandboxLogoIcon,
  FileIcon,
  StarIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { Button } from "./button";
import { CloudIcon, FolderIcon, StorageIcon } from "./icons";

export const SideBar = () => {
  return (
    <aside className="flex flex-col gap-y-5 w-60 h-screen border-[1px] border-sidebar">
      <div className="flex items-center justify-center gap-x-1 border-b-[1px] border-sidebar p-3 min-h-28">
        <StorageIcon
          className="w-10 h-10 text-gray-800 dark:text-gray-200 fill-primary"
          aria-hidden="true"
        />
        <h1 className="text-[30px] font-bold text-gray-800 dark:text-gray-200 mr-2">
          Grive.io
        </h1>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col border-b-[1px] border-sidebar px-3 min-h-24">
            <span className="text-gray-300 font-light text-sm tracking-wide text-opacity-80 mb-1">
              Overview
            </span>
            <Button className="mb-4 w-full rounded-sm flex items-center">
              <CodeSandboxLogoIcon className="w-5 h-5 fill-primary mr-2" />
              <span>Overview Storage</span>
            </Button>
          </div>
          <div className="px-3 py-5 border-b-[1px] border-sidebar">
            <span className="text-gray-300 font-light text-sm tracking-wide text-opacity-80 mb-1 mt-2">
              File Manager
            </span>
            <ul className="ml-2 mt-2 flex flex-col gap-y-7">
              <li className="flex">
                <ChevronRightIcon className="w-5 h-5 fill-primary mr-2" />
                <div className="flex items-center">
                  <CloudIcon className="w-5 h-5 stroke-slate-50 mr-2" />
                  <span>My Storage</span>
                </div>
              </li>
              <li className="flex">
                <ChevronRightIcon className="w-5 h-5 fill-primary mr-2" />
                <div className="flex items-center">
                  <ClockIcon className="w-5 h-5 fill-primary mr-2" />
                  <span>Recents</span>
                </div>
              </li>
              <li className="flex">
                <ChevronRightIcon className="w-5 h-5 fill-primary mr-2" />
                <div className="flex items-center">
                  <StarIcon className="w-5 h-5 fill-primary mr-2" />
                  <span>Favorites</span>
                </div>
              </li>
              <li className="flex">
                <ChevronRightIcon className="w-5 h-5 fill-primary mr-2" />
                <div className="flex items-center">
                  <TrashIcon className="w-5 h-5 fill-primary mr-2" />
                  <span>Trash</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="px-3 py-5 border-b-[1px] border-sidebar min-h-40">
            <span className="text-gray-300 font-light text-sm tracking-wide text-opacity-80 mb-1 mt-2">
              File Manager
            </span>
            <ul className="ml-2 mt-2 flex flex-col gap-y-3">
              <li className="flex items-center">
                <ChevronRightIcon className="w-5 h-5 fill-primary mr-2" />
                <div className="flex items-center">
                  <FolderIcon className="w-5 h-5 stroke-white mr-2" />
                  <span>Shared Folders</span>
                </div>
              </li>
              <li className="flex items-center">
                <ChevronRightIcon className="w-5 h-5 fill-primary mr-2" />
                <div className="flex items-center">
                  <FileIcon className="w-5 h-5 fill-primary mr-2" />
                  <span>Shared Files</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="px-3 py-5 border-b-[1px] border-sidebar min-h-40">
            <span className="text-gray-300 font-light text-sm tracking-wide text-opacity-80 mb-1 mt-2">
              Team Storage
            </span>
            <ul className="ml-2 mt-2 flex flex-col gap-y-3">
              <li className="flex items-center">
                <ChevronRightIcon className="w-5 h-5 fill-primary mr-2" />
                <div className="flex items-center">
                  <FolderIcon className="w-5 h-5 stroke-white mr-2" />
                  <span>Facultad</span>
                </div>
              </li>
              <li className="flex items-center">
                <ChevronRightIcon className="w-5 h-5 fill-primary mr-2" />
                <div className="flex items-center">
                  <FileIcon className="w-5 h-5 fill-primary mr-2" />
                  <span>Trabajo</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center border-t-[1px] border-sidebar p-3">
          <Button
            className="w-full rounded-sm flex items-center justify-center"
            variant="default"
          >
            <span className="">Sign Out</span>
          </Button>
        </div>
      </div>
    </aside>
  );
};
