"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-indigo-50 to-white">
      <motion.div
        className="text-center max-w-3xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Understand News Like Never Before
        </h1>
        <p className="text-xl text-gray-600">
          Uncover bias, analyze sentiment, and get multiple perspectives on any
          news article with our advanced AI analysis
        </p>

        <div className="max-w-2xl mx-auto mt-8">
          <div className="relative">
            <input
              type="url"
              className="w-full px-6 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-lg"
              placeholder="Paste article URL here..."
            />
            <motion.button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-xl font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="hidden sm:inline mr-2">Analyze</span>
              <Search className="h-5 w-5 inline" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
