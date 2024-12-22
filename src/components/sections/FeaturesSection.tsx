"use client";

import { motion } from "framer-motion";
import { Brain, Scale, LineChart } from "lucide-react";

const features = [
  {
    icon: Brain,
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
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Why Choose NewzInsight?
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful tools for understanding news content
          </p>
        </div>

        <div className="grid items-center md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className=" backdrop-blur-sm p-6 rounded-xl shadow-lg border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="rounded-lg p-3 inline-block mb-4">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
