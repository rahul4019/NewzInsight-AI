"use client";

import { createContext, ReactNode, useState } from "react";

export const InsightContext = createContext({});

export default function InsightProvider({ children }: { children: ReactNode }) {
  const [insight, setInsight] = useState(null);
  return (
    <InsightContext.Provider value={{ insight, setInsight }}>
      {children}
    </InsightContext.Provider>
  );
}
