"use client";

import { motion } from "framer-motion";
import Summary from "../ui/Summary";
import { useContext } from "react";
import { InsightContext } from "@/app/insight-provider";
import SentimentAnalysis from "../ui/SentimentAnalysis";
import Bias from "../ui/Bias";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { Globe } from "lucide-react";
import Link from "next/link";

export default function AnalysisSection() {
  const context = useContext(InsightContext);

  if (!context) {
    throw new Error("no provider");
  }

  if (!context.insight) return null;

  const { sentiment, summary, biasAssessment, title, articleLink } =
    context.insight;

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
            <div className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Card className="h-full p-6 bg-background dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2 font-bold sm:text-2xl text-primary">
                      <Globe />
                      <Link
                        href={articleLink}
                        className="hover:underline"
                        target="_blank"
                      >
                        {title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                </Card>
              </motion.div>
            </div>
            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex flex-col lg:flex-row justify-around w-full gap-4 ">
                  <SentimentAnalysis sentiment={sentiment} />
                  <Bias biasAssessment={biasAssessment} />
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
