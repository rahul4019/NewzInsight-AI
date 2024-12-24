import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function KeyPoints({
  biasAssessment,
}: {
  biasAssessment: {
    isBiased: boolean;
    explanation: string;
    solution: string;
  };
}) {
  console.log(biasAssessment);

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
        {biasAssessment.isBiased ? (
          <div className="flex flex-col gap-2 text-muted-foreground">
            <p>
              <span className="text-red-500 font-semibold text-lg">
                Biasness
              </span>
              : {biasAssessment.explanation}
            </p>
            <p>
              <span className="text-green-500 font-semibold text-lg">
                Solution
              </span>
              : {biasAssessment.solution}
            </p>
          </div>
        ) : (
          <div className="text-green-500"> No biasness found</div>
        )}
      </CardContent>
    </Card>
  );
}
