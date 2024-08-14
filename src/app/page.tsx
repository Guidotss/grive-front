import {
  CodeSandboxLogoIcon,
  FileIcon,
  GridIcon,
  ImageIcon,
  MixIcon,
  PlusIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import { SideBar, NavBar, Button, Progress } from "@/components";
import { OVER_VIEW_STORAGE } from "@/constants";

export default function Home() {
  return (
    <main className="flex justify-between">
      <SideBar />
      <section className="flex-1">
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
            <Button className="rounded-sm flex items-center p-5">
              <PlusIcon className="w-5 h-5 fill-primary mr-2" />
              <span className="text-lg font-light">Create</span>
            </Button>
          </div>
        </section>

        <section className="p-10">
          <h5 className="font-light text-gray-300 mb-2">Overview Storage</h5>
          <div
            className="grid grid-cols-4 gap-x-10"
            style={{ height: "calc(100vh - 113px)" }}
          >
            {OVER_VIEW_STORAGE.map((item) => (
              <div key={item.id} className="col-span-1">
                <div className="flex flex-col gap-y-2 bg-[#383838] p-5 rounded-lg min-h-28">
                  <div className=" bg-[#383838] flex gap-x-5">
                    {item.icon}
                    <div>
                      <h4 className="text-lg font-light">{item.title}</h4>
                      <p className="text-gray-400 text-sm mt-1">
                        {item.items} items
                      </p>
                    </div>
                  </div>
                  <Progress value={item.progress} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
