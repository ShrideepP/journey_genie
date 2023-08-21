import { FC } from "react";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import { Metadata } from "next";

interface LayoutProps {
  children: JSX.Element;
};

export const metadata: Metadata = {
  title: "Journey Genie",
  description: "Hello World",
};

const poppins = Poppins({ weight: ["100","200","300","400","500","600","700","800","900"], subsets: ["latin"] });

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <head />
      <body style={poppins.style} className='w-full h-full antialiased relative z-0 overflow-x-hidden scroll-smooth'>
        {children}
        <Toaster />
      </body>
    </html>
  );
};

export default Layout;
