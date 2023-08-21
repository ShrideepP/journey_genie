import SignIn from "@/components/lobby/signin";
import Image from "next/image";
import { Button } from "../ui/button";
import { Icons } from "@/components/icons";

const NavigationMenu = () => {
  return (
    <nav className="w-full h-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex justify-between items-center">
      <div>
        <Image 
          width={150}
          height={150}
          src="/logo.svg"
          alt="Journey Genie official logo."
          className="w-28 h-auto"
          priority
        />
      </div>
      <div className="flex items-center sm:gap-x-2">
        <div>
          <Button size="icon" variant="ghost">
            <Icons.github className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="ghost">
            <Icons.heart className="w-4 h-4" />
          </Button>
        </div>
        <SignIn />
      </div>
    </nav>
  );
};

export default NavigationMenu;
