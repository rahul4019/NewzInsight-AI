"use client";

import { motion } from "framer-motion";
import PieChartSection from "../ui/Piechart";
import Summary from "../ui/Summary";
import KeyPoints from "../ui/KeyPoints";

export default function AnalysisSection() {
  return (
    <div className="min-h-screen  p-4 sm:p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-7xl"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">
          Sentiment Analysis Dashboard
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <PieChartSection />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <KeyPoints />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="lg:col-span-3"
          >
            <Summary />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
