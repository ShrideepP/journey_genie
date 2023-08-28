"use client";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "@/toolkit/store";

const Providers = ({
  children
} : ChildrenProps) => {
  return (
    <SessionProvider>
      <Provider store={store}>
        {children}
      </Provider>
    </SessionProvider>
  );
};

export default Providers;
