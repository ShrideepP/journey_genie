import { Poppins } from "next/font/google";
import ReduxProvider from "@/toolkit/provider";
import "@/styles/globals.css";

const poppins = Poppins({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin']
});

export default function Layout({
  children
} : ChildrenProps) {
  return (
    <html lang="en">
      <body style={poppins.style} className="w-full h-full antialiased relative z-0 overflow-x-hidden">
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
};
