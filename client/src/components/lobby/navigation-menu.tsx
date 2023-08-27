"use client";

import {
  Github,
  ExternalLink
} from "lucide-react";
import { getAuth } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Signin from "@/components/lobby/signin";
import Image from "next/image";

export default function NavigationMenu() {
  const { token } = getAuth();
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
                <Github className="w-4 h-4" />
              </Button>
            </a>
            <a href="https://api-journey-genie.vercel.app/" target="_blank">
              <Button variant="ghost" size="icon">
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </div>
          {token ? (
            <div>
              <Link href="/dashboard">
                <Button variant="outline">
                  Dashboard
                </Button>
              </Link>
            </div>
          ) : <Signin />}
        </div>
      </div>
    </nav>
  );
};
