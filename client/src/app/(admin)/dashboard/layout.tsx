"use client";

import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getAuth } from "@/lib/utils";
import NavigationMenu from "@/components/dashboard/navigation-menu";

export const metadata: Metadata = {
  title: "Admin",
};

export default function DashboardLayout({
  children
} : ChildrenProps) {
  const { token } = getAuth();

  if(!token) {
    return redirect("/");
  };

  return (
    <div className="w-full h-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 relative z-0 overflow-x-hidden flex">
      <NavigationMenu />
      {children}
    </div>
  );
};
