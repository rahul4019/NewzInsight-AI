"use client";

import { createContext, ReactNode, useState } from "react";

export type Insight = {
  title: string;
  articleLink: string;
  sentiment: {
    positive: number;
    negative: number;
    neutral: number;
  };
  summary: string;
  biasAssessment: {
    isBiased: boolean;
    explanation: string;
    solution: string;
  };
};

type InsightContextType = {
  insight: Insight | null;
  setInsight: (insight: Insight) => void;
};

export const InsightContext = createContext<InsightContextType | null>(null);

export default function InsightProvider({ children }: { children: ReactNode }) {
  const [insight, setInsight] = useState<Insight | null>(null);
  return (
    <InsightContext.Provider value={{ insight, setInsight }}>
      {children}
    </InsightContext.Provider>
  );
}
