"use client";

import { useAppSelector } from "@/toolkit/store";
import { Loader } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import MoreDetails from "./more-details";
import Image from "next/image";

export default function FilterResult() {
  const {
    message,
    isLoading,
    data
  } = useAppSelector((state) => state.filterResult);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      {(message && !isLoading) && <p className="text-sm text-muted-foreground font-normal">{message}!</p>}
      {isLoading && <Loader className="w-6 h-6 text-muted-foreground animate-spin" />}
      {(data && !isLoading) && (
        <>
        <div className="w-full md:w-3/5 h-fit space-y-4">
          <div className="w-full h-52 relative overflow-hidden">
            <Image 
              src={data[0].image.URL}
              alt={data[0].name}
              fill
              sizes="(max-width: 768px) 100vw"
              className="absolute inset-0 object-cover object-center rounded-lg"
            />
          </div>
          <div>
            <h4 className="text-xl font-semibold">
              {data[0].name}
            </h4>
            <p className="mt-1 mb-2 text-sm text-muted-foreground font-normal">
              {data[0].description.slice(0, 80) + "..."}
              {" "}
              <MoreDetails 
                inlineBtn 
                destination={data[0]}
              />
            </p>
            <div className="flex flex-wrap gap-1">
              <Badge className="py-1 font-normal">
                {data[0].temperature}
              </Badge>
              <Badge className="py-1 font-normal">
                {data[0].flightDuration}
              </Badge>
              <Badge className="py-1 font-normal">
                {data[0].journeyType}
              </Badge>
            </div>
          </div>
        </div>
        {data.length > 1 && (
          <div className="w-full md:w-3/5 flex justify-start">
            <p className="text-start text-sm text-destructive font-normal">
              {data.length - 1} more results found based on the filters.
            </p>
          </div>
        )}
        </>
      )}
    </div>
  );
};
