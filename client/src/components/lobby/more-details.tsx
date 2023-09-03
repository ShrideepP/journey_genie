"use client";

import { Drawer } from "vaul";
import { Badge } from "../ui/badge";

interface MoreDetailsProps {
  destination: Destination;
  inlineBtn?: boolean;
};

export default function MoreDetails({
  inlineBtn=false,
  destination
} : MoreDetailsProps) {
  return (
    <Drawer.Root>
      {
        !inlineBtn ? (
          <Drawer.Trigger className="w-full py-2 px-4 text-sm text-secondary-foreground font-medium transition-all duration-150 rounded-md bg-secondary hover:bg-secondary/80">
            Learn More
          </Drawer.Trigger>
        ) : (
          <Drawer.Trigger className="inline text-sm text-primary font-medium hover:underline underline-offset-2">
            Learn More 
          </Drawer.Trigger>
        )
      }
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-black/40" />
        <Drawer.Content className="w-full h-96 fixed bottom-0 z-50 overflow-hidden rounded-t-2xl bg-background">
          <div className="w-full h-full p-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="w-20 h-1.5 mx-auto mb-4 rounded-full bg-border" />
            <div className="w-full md:w-2/4 h-fit mx-auto space-y-2">
              <h4 className="text-xl font-semibold">
                {destination.name}
              </h4>
              <p className="mb-4 text-sm md:text-base text-muted-foreground font-normal">
                {destination.description}
              </p>
              <div className="flex flex-wrap gap-1">
                <Badge className="py-1 text-sm font-normal">
                  {destination.temperature}
                </Badge>
                <Badge className="py-1 text-sm font-normal">
                  {destination.flightDuration}
                </Badge>
                <Badge className="py-1 text-sm font-normal">
                  {destination.journeyType}
                </Badge>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
