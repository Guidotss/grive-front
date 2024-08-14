import { BellIcon, GearIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Input } from "./input";

export const NavBar = () => {
  return (
    <header className="min-h-[113px] border-b-[1px] border-sidebar px-10 py-5">
      <nav className="flex items-center justify-between">
        <div className="w-full flex items-center gap-x-10">
          <h1 className="text-xl">File Manager</h1>
          <Input
            className="w-[63vw] text-lg border-input rounded-lg border-[1px] border-[#2d2a2a] bg-[#383838]"
            placeholder="Search for files..."
          />
        </div>
        <div className="flex items-center gap-x-5">
          <div className="bg-[#383838] p-3 rounded-full hover:bg-[#2d2a2a] transition-colors duration-300 ease-in-out">
            <BellIcon className="w-5 h-5 fill-primary" />
          </div>
          <div className="bg-[#383838] p-3 rounded-full hover:bg-[#2d2a2a] transition-colors duration-300 ease-in-out">
            <GearIcon className="w-5 h-5 fill-primary" />
          </div>
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Guido Olguin"
            />
            <AvatarFallback>GO</AvatarFallback>
          </Avatar>
        </div>
      </nav>
    </header>
  );
};
