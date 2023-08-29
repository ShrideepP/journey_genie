import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/icons";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function NavigationMenu() {
  const path = usePathname();
  return (
    <aside className="w-full lg:w-80 lg:h-screen px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 border-r">
      <div className="w-full h-20 flex items-center">
        <Image
          src="/logo.svg"
          alt="Journey Genie official logo."
          width={100}
          height={100}
          priority
          className="w-24 h-auto" 
        />
      </div>
      <div className="flex flex-col gap-2">
        <Link href="/dashboard">
          <Button variant={path === "/dashboard" ? "secondary" : "ghost"} className="w-full px-6 flex justify-start gap-2.5">
            <Icons.dashboard className="w-4 h-4" />
            Dashboard
          </Button>
        </Link>
        <Link href="/dashboard/add">
          <Button variant={path === "/dashboard/add" ? "secondary" : "ghost"} className="w-full px-6 flex justify-start gap-2.5">
            <Icons.add className="w-4 h-4" />
            Add New
          </Button>
        </Link>
        <Link href="/dashboard/manage">
          <Button variant={path === "/dashboard/manage" ? "secondary" : "ghost"} className="w-full px-6 flex justify-start gap-2.5">
            <Icons.manage className="w-4 h-4" />
            Manage
          </Button>
        </Link>
        <Button onClick={() => signOut({ callbackUrl: "/" })} variant={"ghost"} className="w-full px-6 flex justify-start gap-2.5">
          <Icons.logout className="w-4 h-4" />
          Signout
        </Button>
      </div>
    </aside>
  );
};
