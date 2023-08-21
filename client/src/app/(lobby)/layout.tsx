import { FC } from "react";
import NavigationMenu from "@/components/lobby/navigation-menu";
import Footer from "@/components/lobby/footer";

interface LayoutProps {
  children: JSX.Element;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen relative z-0">
      <NavigationMenu />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
