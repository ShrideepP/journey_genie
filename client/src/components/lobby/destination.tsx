import Image from "next/image";
import MoreDetails from "./more-details";
import { Badge } from "@/components/ui/badge";

interface DestinationProps {
  destination: Destination;
};

export default function Destination({
  destination
} : DestinationProps) {
  return (
    <div className="w-full h-fit space-y-4">
      <div className="w-full h-52 relative overflow-hidden">
        <Image 
          src={destination.image.URL}
          alt={destination.name}
          fill
          sizes="(max-width: 768px) 100vw"
          className="absolute inset-0 object-cover object-center rounded-lg"
        />
      </div>
      <div>
        <h4 className="text-xl font-semibold">
          {destination.name}
        </h4>
        <p className="mt-1 mb-2 text-sm text-muted-foreground font-normal">
          {destination.description.slice(0, 60) + "..."}
          {" "}
          <MoreDetails 
            inlineBtn 
            destination={destination}
          />
        </p>
        <div className="flex flex-wrap gap-1">
          <Badge className="py-1">
            {destination.temperature}
          </Badge>
          <Badge className="py-1">
            {destination.flightDuration}
          </Badge>
          <Badge className="py-1">
            {destination.journeyType}
          </Badge>
        </div>
      </div>
    </div>
  );
};
