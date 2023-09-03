import NavigationMenu from "@/components/dashboard/navigation-menu";
import Header from "@/components/dashboard/header";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to Your Travel Dashboard | Journey Genie",
  description: "Your journey begins here! The Journey Genie dashboard is your gateway to personalized travel experiences. Access your itineraries, explore new destinations, and create memories that last a lifetime."
};

export default async function DashboardLayout({
  children
} : ChildrenProps) {
  const session = await getServerSession(authOptions);

  // if(!session?.user.token) {
  //   return redirect("/");
  // };

  return (
    <div className="w-full min-h-screen relative z-0 lg:flex items-start">
      <NavigationMenu />
      <div className="flex-1 h-fit relative z-0">
        <Header />
        {children}
      </div>
    </div>
  );
};
