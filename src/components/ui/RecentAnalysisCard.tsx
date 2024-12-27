"use client";

import { motion } from "framer-motion";
import { ChevronRight, ExternalLink } from "lucide-react";
import { Analysis } from "../sections/RecentAnalysisSection";
import Link from "next/link";

export function RecentAnalysisCard({ analysis }: { analysis: Analysis }) {
  const { title, createdAt, summary, articleLink, biasAssessment, sentiment } =
    analysis;

  const date = new Date(createdAt);
  const formatedDate = date.toLocaleDateString("en-GB");

  // find dominationg sentiment and its value
  const [dominatingSentiment, dominatingSentimentValue] = Object.entries(
    sentiment,
  ).reduce(
    ([defaultSentiment, maxValue], [currentSentiment, currentValue]) => {
      return currentValue > maxValue
        ? [currentSentiment, currentValue]
        : [defaultSentiment, maxValue];
    },
    ["neutral", -Infinity],
  );

  return (
    <motion.div
      className="bg-background p-6 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-300"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex justify-end items-center mb-2">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {formatedDate}
        </span>
      </div>
      <h3 className="font-semibold text-xl mb-2">
        <Link
          href={articleLink}
          className="text-primary hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </Link>
        <ExternalLink size={15} className="inline-flex ml-2 text-primary" />
      </h3>
      <p className="text-muted-foreground text-sm mb-4 text-clip">
        {summary.slice(0, 100)}...
      </p>

      <div className="flex gap-3 mb-4">
        <span
          className={`border-2 text-xs py-1 ${
            dominatingSentiment === "positive"
              ? "border-green-500 text-green-500"
              : dominatingSentiment === "negative"
                ? "border-red-500 text-red-500"
                : " border-yellow-500 text-yellow-500"
          }  px-2 flex items-center rounded-lg font-medium`}
        >
          {dominatingSentiment}
        </span>
        <span
          className={`border-2  text-xs font-medium py-1 ${biasAssessment.isBiased ? "border-red-500 text-red-500" : "border-green-500 text-green-500"}  px-2 flex items-center rounded-lg`}
        >
          {biasAssessment.isBiased ? "Biased" : "Unbiased"}
        </span>
      </div>

      <motion.button
        className="flex items-center text-primary font-medium"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <span>View full analysis</span>
        <ChevronRight size={20} className="mt-1" />
      </motion.button>
    </motion.div>
  );
}
