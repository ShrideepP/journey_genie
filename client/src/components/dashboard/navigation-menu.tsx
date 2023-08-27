import {
    LayoutDashboard,
    Plus,
    Settings2,
    LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

const buttons = [
  {
    id: 1,
    name: "Dashboard",
    Icon: LayoutDashboard,
    URL: "/dashboard"
  },
  {
    id: 2,
    name: "Add New",
    Icon: Plus,
    URL: "/add"
  },
  {
    id: 3,
    name: "Manage",
    Icon: Settings2,
    URL: "/manage"
  },
  {
    id: 4,
    name: "Logout",
    Icon: LogOut,
    URL: "/"
  },
];

export default function NavigationMenu() {
  const pathname = usePathname();
  return (
    <div className="w-80 lg:h-screen px-2 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8 lg:py-10 xl:px-10 lg:border-r">
      <div className="flex flex-col space-y-2">
        {buttons.map(({ id, name, Icon, URL }) => (
          <Link key={id} href={URL}>
            <Button onClick={signOut} variant={URL === pathname ? "secondary" : "ghost"} className="w-full justify-start">
              <Icon className="w-4 h-4 mr-2.5" />
              {name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};
