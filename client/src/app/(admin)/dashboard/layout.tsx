import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
};

export default function DashboardLayout({
  children
} : ChildrenProps) {
  return (
    <div className="w-full h-full relative z-0 overflow-x-hidden flex">
      {children}
    </div>
  );
};
