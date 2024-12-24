"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Analysis {
  title: string;
  source: string;
  date: string;
  sentiment: string;
  bias: string;
}

interface RecentAnalysisCardProps {
  analysis: Analysis;
  index: number;
}

export function RecentAnalysisCard({ analysis }: RecentAnalysisCardProps) {
  return (
    <motion.div
      className="bg-background p-6 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-300"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex justify-end items-center mb-2">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          24-2-2024
        </span>
      </div>
      <h3 className="font-semibold text-xl mb-2 line-clamp-2">
        {analysis.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 text-clip">
        Our AI has uncovered surprising patterns in global climate data. Find
        out what this means for future predictions.
      </p>

      <div className="flex gap-3 mb-4">
        <span className="border-2 text-xs py-1 border-yellow-500 text-yellow-500 px-2 flex items-center rounded-full">
          neutral
        </span>
        <span className="border-2 text-xs py-1 border-red-500 text-red-500 px-2 flex items-center rounded-full">
          Biased
        </span>
      </div>

      <button className="text-primary text-sm font-medium inline-flex items-center gap-1">
        View Analysis
        <ExternalLink className="h-4 w-4" />
      </button>
    </motion.div>
  );
}
