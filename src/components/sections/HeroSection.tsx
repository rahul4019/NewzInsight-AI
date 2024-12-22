"use client";

import { motion } from "framer-motion";
import BlurryBlob from "../ui/blurry-blob";
import { Input } from "../ui/input";
import { LoaderCircle, Sparkles } from "lucide-react";
import { useContext, useState } from "react";
import { InsightContext } from "@/app/insight-provider";

export function HeroSection() {
  const [loading, setLoading] = useState(false);
  const { insight, setInsight } = useContext(InsightContext);

  const handleAnalyze = async () => {
    try {
      setLoading(true);
      // const articleUrl =
      //   "https://www.hindustantimes.com/india-news/arrest-warrant-issued-against-former-india-cricketer-robin-uthappa-in-alleged-epf-fraud-101734762519865.html";
      const articleUrl =
        "https://nypost.com/2024/12/20/us-news/house-republicans-greenlight-short-term-spending-package-that-will-need-dem-support-just-hours-before-government-is-set-to-shut-down/";
      const response = await fetch("/api/analyze", {
        method: "POST",
        body: JSON.stringify(articleUrl),
      });

      const data = await response.json();

      console.log("Response: ", data);
      setInsight(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
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
              <div className="flex w-full shadow-xl shadow-black/5 rounded-lg">
                <Input
                  className="placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 border-2 focus:outline-none px-6 py-7 -me-px flex-1 rounded-e-none shadow-none !text-lg"
                  placeholder="Paste article URL here..."
                  type="url"
                />
                <button
                  className="bg-primary inline-flex items-center rounded-e-lg border border-input px-3 text-sm font-medium text-white outline-offset-2 transition-colors hover:bg-primary/80 hover:text-white focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={handleAnalyze}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <LoaderCircle size={18} className="mr-2 animate-spin" />
                      <span className="text-lg">Analyze</span>
                    </>
                  ) : (
                    <>
                      <Sparkles size={18} className="mr-2" />
                      <span className="text-lg">Analyze</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
