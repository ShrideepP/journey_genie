"use client";

import { Provider } from "react-redux";
import store from "./store";

interface ReduxProviderProps {
  children: JSX.Element;
};

export default function ReduxProvider({
  children
} : ReduxProviderProps) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
