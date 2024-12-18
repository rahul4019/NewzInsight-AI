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

export function RecentAnalysisCard({
  analysis,
  index,
}: RecentAnalysisCardProps) {
  return (
    <motion.div
      className="bg-card backdrop-blur-sm rounded-xl shadow-lg border  p-6 hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h3 className="font-semibold text-xl mb-2 line-clamp-2">
        {analysis.title}
      </h3>
      <p className="text-gray-500 text-sm mb-4">
        {analysis.source} • {analysis.date}
      </p>

      <div className="flex gap-3 mb-4">
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            analysis.sentiment === "positive"
              ? "border-2 border-green-500 text-green-500"
              : analysis.sentiment === "negative"
                ? "border-2 border-red-500 text-red-500"
                : "border-2 border-gray-500 text-gray-500"
          }`}
        >
          {analysis.sentiment}
        </span>
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            analysis.bias === "low"
              ? "border-2 border-green-500 text-green-500"
              : analysis.bias === "high"
                ? "border-2 border-red-500 text-red-500"
                : "border-2 border-gray-500 text-gray-500"
          }`}
        >
          {analysis.bias} bias
        </span>
      </div>

      <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium inline-flex items-center gap-1">
        View Analysis
        <ExternalLink className="h-4 w-4" />
      </button>
    </motion.div>
  );
}
