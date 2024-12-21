"use client";

import { motion } from "framer-motion";
import BlurryBlob from "../ui/blurry-blob";
import { Input } from "../ui/input";
import { Sparkles } from "lucide-react";

const handleAnalyze = async () => {
  try {
    const articleUrl =
      "https://www.hindustantimes.com/india-news/arrest-warrant-issued-against-former-india-cricketer-robin-uthappa-in-alleged-epf-fraud-101734762519865.html";
    const response = await fetch("/api/analyze", {
      method: "POST",
      body: JSON.stringify(articleUrl),
    });

    const data = await response.json();

    console.log("Response: ", data);
  } catch (error) {}
};

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 py-16">
      <BlurryBlob
        className="opacity-40 rounded-xl absolute"
        firstBlobColor="bg-purple-400"
        secondBlobColor="bg-blue-400"
      />
      <motion.div
        className="text-center max-w-3xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl z-50 font-bold bg-clip-text text-transparent bg-primary">
          Understand News Like Never Before
        </h1>
        <p className="text-xl text-muted-foreground">
          Uncover bias, analyze sentiment, and get multiple perspectives on any
          news article with our advanced AI analysis
        </p>

        <div className="max-w-2xl mx-auto mt-8">
          <div className="relative">
            <div className="space-y-2 mt-8 relative w-full max-w-2xl">
              <div className="flex w-full shadow-xl shadow-black/5 border-2 border-primary rounded-lg">
                <Input
                  className="placeholder:text-gray-400 placeholder:text-lg focus:outline-none focus:ring-0 focus:border-transparent border px-6 py-7 -me-px flex-1 rounded-e-none shadow-none"
                  placeholder="Paste article URL here..."
                  type="url"
                />
                <button
                  className="bg-primary inline-flex items-center rounded-e-lg border border-input px-3 text-sm font-medium text-white outline-offset-2 transition-colors hover:bg-primary/80 hover:text-white focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={handleAnalyze}
                >
                  <Sparkles size={18} className="mr-2" />
                  <span>Analyze</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
