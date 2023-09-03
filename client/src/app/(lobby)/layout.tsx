import { Metadata } from "next";
import NavigationMenu from "@/components/lobby/navigation-menu";
import Footer from "@/components/lobby/footer";

export const metadata: Metadata = {
  title: "Discover Your Next Adventure | Journey Genie",
  description: "Explore the world's most exciting destinations with Journey Genie. Plan your dream getaway, discover hidden gems, and embark on unforgettable journeys. Start your adventure today!"
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
