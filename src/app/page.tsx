import { CodeSandboxLogoIcon, MixIcon } from "@radix-ui/react-icons";
import {
  SideBar,
  NavBar,
  Button,
  OverViewStorageList,
  FilesGrid,
  UploadDialog,
} from "@/components";

export default function Home() {
  return (
    <main className="flex justify-between">
      <SideBar />
      <section className="justify-end items-end overflow-y-auto max-h-[100vh]">
        <NavBar />
        <section className="p-10 flex items-center justify-between">
          <div className="flex items-center">
            <CodeSandboxLogoIcon className="w-7 h-7 fill-primary mr-2" />
            <h1 className="text-xl">Overview Storage</h1>
          </div>
          <div className="flex items-center gap-x-10">
            <Button
              className="rounded-sm flex items-center p-5 border-[1px] bg-[#383838] border-[#2d2a2a]"
              variant="outline"
            >
              <MixIcon className="w-5 h-5 fill-primary mr-2" />
              <span className="text-lg font-light">Sort</span>
            </Button>
            <UploadDialog/>
          </div>
        </section>
        <OverViewStorageList />
        <FilesGrid />
      </section>
    </main>
  );
}
