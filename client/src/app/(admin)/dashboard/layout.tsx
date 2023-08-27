"use client";

import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {};

export default function DashboardLayout({
  children
} : ChildrenProps) {
  return (
    <div className="w-full h-full relative z-0 overflow-hidden">
      {children}
    </div>
  );
};
