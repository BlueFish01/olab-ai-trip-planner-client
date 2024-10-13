import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LandmarkCard from "./LandmarkCard";
import LandmarkCardContainer from "./LandmarkCardContainer";
import { Button } from "../ui/button";

function TripTools() {
  return (
    <div className="w-2/5">
      <Card className="flex flex-col h-full">
        <CardHeader className="items-start">
          <Badge variant="secondary">4 Nov,2024 - 6 Nov,2024</Badge>
          <CardTitle>3 Days trips in Tokyo</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col h-full">
          <LandmarkCardContainer
            tripData={[<><LandmarkCard /><LandmarkCard /></>, <LandmarkCard />, <LandmarkCard />]}
          />
        </CardContent>
        <CardFooter className="flex w-full justify-end item-end">
          <Button>Next</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export { TripTools };
