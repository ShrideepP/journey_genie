"use client";

import {
  Github,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAuth } from "@/lib/utils";
import Link from "next/link";
import Signin from "./signin";

export default function NavigationMenu() {
  const { token } = getAuth();
  return (
    <nav className="w-full h-fit px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="w-full h-20 flex justify-between items-center border-b">
        <div>Logo</div>
          <div className="flex items-center gap-x-2">
            <div className="flex items-center">
              <a 
                href="https://github.com/ShrideepP/journey_genie"
                target="_blank"
              >
                <Button variant="ghost" size="icon">
                  <Github className="w-4 h-4" />
                </Button>
              </a>
              <a 
                href="https://api-journey-genie.vercel.app"
                target="_blank"
              >
                <Button variant="ghost" size="icon">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
            {
              token ? (
                <Link href="/dashboard">
                  <Button variant="outline">
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <Signin />
              )
            }
          </div>
      </div>
    </nav>
  );
};
