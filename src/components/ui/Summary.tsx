import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Summary() {
  return (
    <Card className="h-full bg-white shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="bg-gray-50 border-b border-gray-200">
        <CardTitle className="text-xl sm:text-2xl text-gray-800">
          Executive Summary
        </CardTitle>
        <CardDescription className="text-gray-600">
          Comprehensive overview of our current status
        </CardDescription>
      </CardHeader>
      <CardContent className="prose max-w-none p-4 sm:p-6">
        <p className="lead text-lg text-gray-800 font-semibold">
          Our recent sentiment analysis reveals valuable insights into customer
          feedback and overall satisfaction.
        </p>
        <p>
          The analysis shows a{" "}
          <span className="font-bold text-blue-600">
            predominantly positive sentiment
          </span>
          , with 44% of feedback being positive. This indicates that our efforts
          in product quality and customer service are resonating well with our
          user base.
        </p>
        <p>
          <span className="font-bold text-yellow-600">Neutral sentiment</span>{" "}
          accounts for 33% of the feedback. While not negative, this presents an
          opportunity to convert these neutral experiences into positive ones
          through targeted improvements and engagement strategies.
        </p>
        <p>
          <span className="font-bold text-red-600">Negative sentiment</span>{" "}
          makes up 23% of the feedback. While this is the smallest segment, it's
          crucial to address these concerns promptly. We've initiated a deep
          dive into this feedback to identify common issues and develop action
          plans for resolution.
        </p>
        <p>
          Key areas for improvement identified from the negative feedback
          include:
        </p>
        <ul>
          <li>Response time for customer support inquiries</li>
          <li>User interface intuitiveness in certain product areas</li>
          <li>Pricing structure for specific customer segments</li>
        </ul>
        <p>Moving forward, our strategy will focus on:</p>
        <ol>
          <li>
            Enhancing our customer support system to improve response times
          </li>
          <li>Conducting user experience workshops to address UI concerns</li>
          <li>
            Reviewing our pricing strategy to ensure it aligns with perceived
            value
          </li>
          <li>
            Implementing a feedback loop to continuously monitor and act on
            customer sentiment
          </li>
        </ol>
        <p>
          By addressing these areas, we aim to shift more neutral sentiment
          towards positive and mitigate negative experiences, ultimately
          improving overall customer satisfaction and loyalty.
        </p>
      </CardContent>
    </Card>
  );
}
