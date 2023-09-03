import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/providers";
import "@/styles/globals.css";

const poppins = Poppins({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin']
});

export default function Layout({
  children
} : ChildrenProps) {
  return (
    <html lang="en" style={poppins.style}>
      <body style={{ paddingLeft: 'calc(100vw - 100%)' }} className="w-screen h-full antialiased relative z-0 overflow-x-hidden">
        <Providers>
          {children}
        </Providers>
        <Toaster />
      </body>
    </html>
  );
};
