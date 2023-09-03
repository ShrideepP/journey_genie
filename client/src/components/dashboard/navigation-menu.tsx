"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function NavigationMenu() {
  const [menu, setMenu] = useState(false);
  const path = usePathname();

  const toggleMenu = () => setMenu(!menu);

  return (
    <aside className={`w-full lg:w-80 h-fit lg:h-screen px-4 sm:px-8 md:px-12 lg:px-8 xl:px-10 relative lg:sticky top-0 left-0 z-50 overflow-x-hidden ${!menu && 'border-b'} lg:border-r bg-background`}>
      <div className="w-full h-20 relative lg:hidden flex justify-between items-center">
        <Image 
          src="/logo.svg"
          alt="Journey Genie official logo."
          width={100}
          height={100}
          priority
          className="w-24 h-auto"
        />
        <Button type="button" variant="secondary" size="icon" onClick={toggleMenu}>
          {menu ? <Icons.close className="w-5 h-5" /> : <Icons.menu className="w-5 h-5" />}
        </Button>
      </div>

      {menu && (
        <div className="w-full h-fit lg:hidden py-4 space-y-2 border-y bg-background">
          <Link href="/dashboard" className="flex">
            <Button onClick={toggleMenu} variant={path === "/dashboard" ? "secondary" : "ghost"} className="w-full lg:px-6 flex justify-start gap-2.5">
              <Icons.dashboard className="w-4 h-4" />
              Dashboard
            </Button>
          </Link>
          <Link href="/dashboard/add" className="flex">
            <Button onClick={toggleMenu} variant={path === "/dashboard/add" ? "secondary" : "ghost"} className="w-full lg:px-6 flex justify-start gap-2.5">
              <Icons.add className="w-4 h-4" />
              Add New
            </Button>
          </Link>
          <Link href="/dashboard/manage" className="flex">
            <Button onClick={toggleMenu} variant={path === "/dashboard/manage" ? "secondary" : "ghost"} className="w-full lg:px-6 flex justify-start gap-2.5">
              <Icons.manage className="w-4 h-4" />
              Manage
            </Button>
          </Link>
          <Button onClick={() => signOut({ callbackUrl: "/" })} variant={"ghost"} className="w-full lg:px-6 flex justify-start gap-2.5">
            <Icons.logout className="w-4 h-4" />
            Signout
          </Button>
        </div>
      )}

      <div className="w-full h-20 hidden lg:flex items-center">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Journey Genie official logo."
            width={100}
            height={100}
            priority
            className="w-24 h-auto" 
          />
        </Link>
      </div>
      
      <div className="hidden lg:flex flex-col gap-2">
        <Link href="/dashboard">
          <Button variant={path === "/dashboard" ? "secondary" : "ghost"} className="w-full lg:px-6 flex justify-start gap-2.5">
            <Icons.dashboard className="w-4 h-4" />
            Dashboard
          </Button>
        </Link>
        <Link href="/dashboard/add">
          <Button variant={path === "/dashboard/add" ? "secondary" : "ghost"} className="w-full lg:px-6 flex justify-start gap-2.5">
            <Icons.add className="w-4 h-4" />
            Add New
          </Button>
        </Link>
        <Link href="/dashboard/manage">
          <Button variant={path === "/dashboard/manage" ? "secondary" : "ghost"} className="w-full lg:px-6 flex justify-start gap-2.5">
            <Icons.manage className="w-4 h-4" />
            Manage
          </Button>
        </Link>
        <Button onClick={() => signOut({ callbackUrl: "/" })} variant={"ghost"} className="w-full lg:px-6 flex justify-start gap-2.5">
          <Icons.logout className="w-4 h-4" />
          Signout
        </Button>
      </div>
    </aside>
  );
};
