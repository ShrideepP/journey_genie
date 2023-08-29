"use client";

import { Metadata } from "next";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import NavigationMenu from "@/components/dashboard/navigation-menu";
import Header from "@/components/dashboard/header";

export const metadata: Metadata = {};

export default function DashboardLayout({
  children
} : ChildrenProps) {
  const { data: session } = useSession();

  // if(!session?.user.token) {
  //   return redirect("/");
  // };

  return (
    <div className="w-full h-full lg:flex relative z-0 overflow-hidden">
      <NavigationMenu />
      <div className="flex-1 h-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        <Header />
        {children}
      </div>
    </div>
  );
};
