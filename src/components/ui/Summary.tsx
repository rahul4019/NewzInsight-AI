import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Summary() {
  return (
    <Card className="h-full shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="bg-primary">
        <CardTitle className="text-xl sm:text-2xl text-gray-200">
          Executive Summary
        </CardTitle>
        <CardDescription className="text-gray-300">
          Comprehensive overview of our current status
        </CardDescription>
      </CardHeader>
      <CardContent className="prose max-w-none p-4 sm:p-6">
        <p className="lead">
          Congress passed a significantly reduced government funding bill after
          President-elect Donald Trump and his advisor Elon Musk objected to the
          initial, much larger spending package. The original 1547-page bill was
          reduced to 118 pages, avoiding a government shutdown. The smaller bill
          passed the Senate shortly after a midnight deadline and the House
          overwhelmingly approved it. Eliminated provisions included
          congressional pay raises and the reauthorization of the State
          Department's Global Engagement Center. The compromise bill funds the
          government until March 14, 2025, and includes hurricane relief and aid
          to farmers
        </p>
      </CardContent>
    </Card>
  );
}
