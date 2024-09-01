import { OVER_VIEW_STORAGE } from "@/constants";
import "animate.css"; 

interface Props {
  fileType: string;
  item: number;
}

export const OverViewStorageCard = ({ fileType, item }: Props) => {
  return (
    <div className="col-span-1 animate__animated animate__fadeIn">
      <div className="flex flex-col gap-y-2 bg-[#383838] p-5 rounded-lg min-h-28">
        <div className=" bg-[#383838] flex gap-x-5">
          {OVER_VIEW_STORAGE[fileType].icon}
          <div>
            <h4 className="text-lg">
              {fileType.toLocaleUpperCase()}
            </h4>
            <p className="text-gray-400 text-sm mt-1">
              {item > 0 ? `${item} files` : `${item} file`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
