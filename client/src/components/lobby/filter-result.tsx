"use client";

import { useAppSelector } from "@/toolkit/store";

export default function FilterResult() {
  const {
    message,
    isLoading,
    data
  } = useAppSelector((state) => state.filterResult);

  return (
    <div className="w-full h-full grid place-items-center">
    </div>
  );
};
