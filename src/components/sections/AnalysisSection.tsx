"use client";

import { motion } from "framer-motion";
import PieChartSection from "../ui/Piechart";
import Summary from "../ui/Summary";
import KeyPoints from "../ui/KeyPoints";
import { useContext } from "react";
import { InsightContext } from "@/app/insight-provider";

export default function AnalysisSection() {
  const context = useContext(InsightContext);

  if (!context) {
    throw new Error("no provider");
  }

  if (!context.insight) return null;

  const { sentiment, summary, biasAssessment } = context.insight;

  return (
    <div>
      {context.insight && (
        <div className="min-h-screen  p-4 sm:p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto max-w-7xl"
          >
            <h1 className="text-3xl text-primary sm:text-4xl font-bold mb-6 sm:mb-8 text-center">
              Analysis of the article
            </h1>
            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex flex-col lg:flex-row justify-around w-full gap-4 ">
                  <PieChartSection sentiment={sentiment} />
                  <KeyPoints biasAssessment={biasAssessment} />
                </div>
              </motion.div>
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Summary summary={summary} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
