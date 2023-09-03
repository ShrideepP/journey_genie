"use client";

import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export default function Header() {
  const { data: session } = useSession();
  const name = session?.user.name;
  return (
    <header className="w-full h-20 px-4 sm:px-8 md:px-12 lg:px-8 xl:px-10 hidden lg:flex justify-between items-center border-b">
      <p className="text-sm text-foreground font-normal">
        Hi, <span className="font-semibold">{name}</span>
      </p>
      <div className="flex items-center">
        <a href="https://github.com/ShrideepP/journey_genie" target="_blank"> 
          <Button variant="ghost" size="icon">
            <Icons.github className="w-4 h-4" />
          </Button>
        </a>
        <a href="https://api-journey-genie.vercel.app/" target="_blank"> 
          <Button variant="ghost" size="icon">
            <Icons.externalLink className="w-4 h-4" />
          </Button>
        </a>
      </div>
    </header>
  );
};
