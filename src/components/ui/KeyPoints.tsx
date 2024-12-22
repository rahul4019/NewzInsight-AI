import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, AlertTriangle, MinusCircle } from "lucide-react";

export default function KeyPoints() {
  const points = [
    {
      text: "44% Positive sentiment",
      color: "text-blue-600",
      icon: CheckCircle,
    },
    {
      text: "33% Neutral feedback",
      color: "text-yellow-600",
      icon: MinusCircle,
    },
    {
      text: "23% Negative sentiment",
      color: "text-red-600",
      icon: AlertTriangle,
    },
  ];

  return (
    <Card className="rounded-lg overflow-hidden lg:w-1/2 shadow-lg">
      <CardHeader className="bg-primary">
        <CardTitle className="text-xl sm:text-2xl text-gray-200">
          Key Highlights
        </CardTitle>
        <CardDescription className="text-gray-300">
          Important information at a glance
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <ul className="space-y-3 sm:space-y-4">
          {points.map((point, index) => (
            <li key={index} className="flex items-start">
              <point.icon
                className={`mr-2 h-5 w-5 flex-shrink-0 ${point.color}`}
              />
              <span className={`text-base sm:text-lg ${point.color}`}>
                {point.text}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
