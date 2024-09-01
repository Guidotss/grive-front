import { Button } from "@/components/ui";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { OVER_VIEW_STORAGE } from "@/constants";
import "animate.css";

interface Props {
  fileType: string;
  item: number;
}

export const OverViewStorageCard = ({ fileType, item }: Props) => {
  return (
    <Card
      className="w-full animate__animated animate__fadeIn bg-[#2a2a2a]  text-card-foreground"
      style={{ animationDuration: "0.5s" }}
    >
      <CardContent className="p-5">
        <div className="flex gap-x-5 items-start">
          <div className={`${OVER_VIEW_STORAGE[fileType].color} rounded-sm`}>
            {OVER_VIEW_STORAGE[fileType].icon}
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">
              {fileType.toUpperCase()}
            </h4>
            <p className="text-gray-400 text-sm mt-1">
              {item} {item === 1 ? "file" : "files"}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0 flex justify-end">
        <Button
          variant="secondary"
          size="sm"
          className="bg-gray-600 text-white hover:bg-gray-500"
        >
          View All
        </Button>
      </CardFooter>
    </Card>
  );
};
