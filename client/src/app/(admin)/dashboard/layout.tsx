import { Metadata } from "next";

interface DashboardLayoutProps {
  children: JSX.Element;
};

export const metadata: Metadata = {
  title: "Admin",
};

export default function DashboardLayout({
  children
} : DashboardLayoutProps) {
  return (
    <div className="w-full h-full relative z-0 overflow-x-hidden flex">
      {children}
    </div>
  );
};
