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
        <CardTitle className="text-xl text-gray-200 ">
          Bias Assessment
        </CardTitle>
        <CardDescription className="text-gray-300">
          Important information at a glance
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col gap-2">
          <p>
            <span className="text-red-500 font-semibold">Biasness</span>: The
            article presents a slightly positive framing of Trump's influence on
            the bill's passage, portraying his objections as leading to a more
            fiscally responsible outcome, without fully exploring potential
            negative consequences of his actions.
          </p>
          <p>
            <span className="text-green-500 font-semibold">Solution</span>:
            Include more balanced perspectives from critics of Trump's influence
            on the bill, highlighting potential drawbacks of the reduced
            spending and the political maneuvering involved.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
