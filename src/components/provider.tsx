"use client";

import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";
import TopLoader from "./toploader";

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider attribute="class" {...props}>
      <TopLoader />
      {children}
    </NextThemesProvider>
  );
}
