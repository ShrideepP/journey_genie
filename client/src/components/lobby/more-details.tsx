"use client";

import { Drawer } from "vaul";
import { Button } from "@/components/ui/button";

export default function MoreDetails() {
  return (
    <Drawer.Root>
      <Drawer.Trigger className="w-full py-2 text-sm text-secondary-foreground font-medium transition-all duration-150 rounded-md bg-secondary hover:bg-secondary/80">
        Learn More
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-black/40" />
        <Drawer.Content className="w-full h-fit fixed bottom-0 z-50 overflow-hidden rounded-t-2xl bg-background">
          <div className="w-full h-full pt-4 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="w-20 h-1.5 mx-auto mb-8 rounded-full bg-border" />
            <div>Hello</div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
