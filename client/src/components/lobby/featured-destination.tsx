import MoreDetails from "@/components/lobby/more-details";
import Image from "next/image";

interface FeaturedDestinationProps {
  destination: Destination;
};

export default function FeaturedDestination({
  destination
} : FeaturedDestinationProps) {
  return (
    <div className="min-w-[15rem] w-60 h-80 relative overflow-hidden flex items-end rounded-lg shadow-lg">
      <div className="w-full h-full absolute inset-0 z-0">
        <Image 
          src={destination.image.URL}
          alt={destination.name}
          fill
          sizes="(max-width: 768px) 100vw"
          className="w-full h-full relative -z-10 object-cover select-none rounded-lg"
        />
        <div 
          className="w-full h-full absolute inset-0 rounded-lg" 
          style={{ background: 'linear-gradient(0deg, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)' }}
        />
      </div>
      <div className="w-full h-fit p-4 relative z-20 flex flex-col gap-1">
        <h4 className="text-xl text-white font-semibold">
          {destination.name.split(',')[0]}
        </h4>
        <p className="mb-1 text-xs md:text-sm text-muted font-normal">
          {destination.description.slice(0, 50) + "..."}
        </p>
        <MoreDetails />
      </div>
    </div>
  );
};
