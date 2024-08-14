import { Avatar, AvatarImage, Button, Input, SideBar } from "@/components";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { ChevronDownIcon, PlusCircledIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="flex items-center gap-x-10 justify-between p-5">
      <SideBar />
      <section className="w-full h-[95vh] flex-1 rounded-xl background-orange-gradient p-2">
        <header className="flex justify-around items-center w-full mt-2">
          <Input
            className="text-xl text-slate-900 dark:text-slate-900 px-10 w-[70vw] outline-none h-16"
            placeholder="Search for files..."
          />
          <div className="flex items-center gap-x-10">
            <div className="w-14 h-14 rounded-full bg-slate-50" />
            <div className="flex items-center gap-x-1">
              <Avatar className="h-14 w-14">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <ChevronDownIcon className="w-6 h-6 text-slate-900 dark:text-slate-900" />
            </div>
          </div>
        </header>
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <div className="p-10 flex items-center justify-between">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-900">
                  My Cloud
                </h1>
                <span className="text-lg text-slate-900 dark:text-slate-900 tracking-wider">
                  Hi Guido, welcome back!
                </span>
              </div>
              <Button
                variant="default"
                size="lg"
                className="w-40 h-14 flex items-center gap-x-3 px-0 rounded-xl"
              >
                <PlusCircledIcon className="w-6 h-6 text-slate-900 dark:text-slate-50" />
                <span className="text-xl text-slate-900 dark:text-slate-50">
                  Upload
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
