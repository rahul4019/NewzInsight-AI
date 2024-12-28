import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Globe } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen  p-4 sm:p-6 md:p-8">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-3xl text-primary sm:text-4xl font-bold mb-6 sm:mb-8 text-center">
          Analysis of the article
        </h1>
        <div className="mb-4">
          <div>
            <Card className="h-full p-6 bg-background dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 font-bold sm:text-2xl text-primary">
                  <Globe />
                  <Skeleton className="h-6 w-full" />
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex flex-col lg:flex-row justify-around w-full gap-4 ">
              {/* Sentiment skeleton*/}
              <Card className="w-full h-full bg-background dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                <CardHeader className="space-y-2">
                  <CardTitle>
                    <Skeleton className="h-6 w-3/4" />
                  </CardTitle>
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                  <Skeleton className="h-44 w-44 rounded-full" />
                </CardContent>
                <div className="flex justify-center space-x-4 mt-4 px-6">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-16" />
                </div>
              </Card>
              {/*  Bias skeleton */}
              <Card className="w-full h-full bg-background dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                <CardHeader className="space-y-2">
                  <CardTitle>
                    <Skeleton className="h-6 w-3/4" />
                  </CardTitle>
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent className="space-y-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center space-x-4">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <div>
              {/* Summary skeleton*/}
              <Card className="w-full bg-background dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                <CardHeader className="space-y-2">
                  <CardTitle>
                    <Skeleton className="h-6 w-3/4" />
                  </CardTitle>
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-x-2 flex">
                    {[...Array(3)].map((_, i) => (
                      <Skeleton key={i} className="h-10 w-1/4" />
                    ))}
                  </div>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
