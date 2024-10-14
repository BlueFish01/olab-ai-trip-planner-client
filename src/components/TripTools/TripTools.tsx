'use client'

import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LandmarkCard from "./LandmarkCard";
import LandmarkCardContainer from "./LandmarkCardContainer";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { format } from "date-fns"
import { ScrollArea } from "@/components/ui/scroll-area"

function TripTools() {
  const { startDate, endDate, numberOfDay, city, tripPlan } = useSelector((state: RootState) => {
    return {
      startDate: state.trip.startDate,
      endDate: state.trip.endDate,
      numberOfDay: state.trip.numberOfDay,
      city: state.trip.city,
      tripPlan : state.trip.tripPlan
    };
  });
  
  const formatDate = (startDate:Date, endDate:Date) => {
    const from = format(startDate, "LLL dd, y") 
    const to = format(endDate, "LLL dd, y")
    return `${from} - ${to}`
  }
  return (
    <div className="w-2/5">
      <Card className="flex flex-col h-full">
        <CardHeader className="items-start">
          {(!!startDate && !!endDate) && (<Badge variant="secondary">{formatDate(startDate, endDate)}</Badge>)}
          <CardTitle>{`${numberOfDay} Days trips in ${city.join(",")}`}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col h-full overflow-y-scroll">
          <LandmarkCardContainer
            tripData={tripPlan}
          />
        </CardContent>
        <CardFooter className="flex w-full justify-end item-end mt-2">
          <Button>Next</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export { TripTools };
