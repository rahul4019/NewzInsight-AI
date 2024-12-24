"use client";

import { motion } from "framer-motion";
import { Scale, LineChart, Sparkles } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Analysis",
    description:
      "Advanced machine learning algorithms analyze article content for deeper insights",
  },
  {
    icon: Scale,
    title: "Bias Detection",
    description:
      "Identify potential biases and get a balanced perspective on news stories",
  },
  {
    icon: LineChart,
    title: "Sentiment Analysis",
    description: "Understand the emotional tone and impact of news articles",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 px-4" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Experience the Future of News
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful tools for understanding news content
          </p>
        </div>

        <div className="grid items-center md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col p-6 h-full bg-background dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ scale: 1.03 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
