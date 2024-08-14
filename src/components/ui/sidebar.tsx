import { ChevronRightIcon, CodeSandboxLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./button";
import { StorageIcon } from "./icons";

export const SideBar = () => {
  return (
    <aside className="flex flex-col gap-y-5 w-60 h-screen border-[1px] border-sidebar">
      <div className="flex items-center justify-center gap-x-1 border-b-[1px] border-sidebar p-3">
        <StorageIcon
          name="storage"
          className="w-10 h-10 text-gray-800 dark:text-gray-200 fill-primary"
          aria-hidden="true"
        />
        <h1 className="text-[30px] font-bold text-gray-800 dark:text-gray-200 mr-2">
          Grive.io
        </h1>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col border-b-[1px] border-sidebar px-3">
            <span className="text-gray-300 font-light text-sm tracking-wide text-opacity-80 mb-1">
              Overview
            </span>
            <Button className="mb-4 w-full rounded-sm flex items-center">
              <CodeSandboxLogoIcon className="w-5 h-5 fill-primary mr-2" />
              <span>Overview Storage</span>
            </Button>
          </div>
          <div className="px-3">
            <span className="text-gray-300 font-light text-sm tracking-wide text-opacity-80 mb-1">
              File Manager
            </span>
            <ul className="ml-2 mt-2">
              <li className="flex">
                <ChevronRightIcon className="w-5 h-5 fill-primary mr-2" />
                <span>Files</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};
