"use client";

import { motion } from "framer-motion";
import InputDemo from "../ui/InputWithButton";
import BlurryBlob from "../ui/blurry-blob";

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
            <InputDemo />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
