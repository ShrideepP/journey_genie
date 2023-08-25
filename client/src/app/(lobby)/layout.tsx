import { Metadata } from "next";
import NavigationMenu from "@/components/lobby/navigation-menu";
import Footer from "@/components/lobby/footer";

export const metadata: Metadata = {
  title: 'Journey Genie | Travel Application',
  description: 'Embark on a Journey Tailored to Your Tastes'
};

export default function LobbyLayout({
  children
} : ChildrenProps) {
  return (
    <>
    <NavigationMenu />
    <main>
      {children}
    </main>
    <Footer />
    </>
  );
};
