"use client";

import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Signin from "@/components/lobby/signin";
import Image from "next/image";
import Link from "next/link";

export default function NavigationMenu() {
  const { data: session } = useSession();
  const token = session?.user.token;
  return (
    <nav className="w-full h-fit px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="w-full h-20 flex items-center justify-between border-b">
        <Image 
          src="/logo.svg"
          alt="Journey Genie official logo."
          width={100}
          height={100}
          priority
          className="w-24 h-auto"
        />
        <div className="flex items-center gap-x-2">
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
          {token ? (
            <Link href="/dashboard">
              <Button variant="outline">
                Dashboard
              </Button>
            </Link>
          ) : <Signin />}
        </div>
      </div>
    </nav>
  );
};
