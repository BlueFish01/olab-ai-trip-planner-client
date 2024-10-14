import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DayPlan, LandmarkObject } from "@/lib/features/trip/tripSlice";
import LandmarkCard from "./LandmarkCard";

interface LandmarkCardContainerProps {
  tripData: DayPlan;
}
function LandmarkCardContainer({ tripData }: LandmarkCardContainerProps) {
  console.log("tripData", tripData)
  return (
    <Accordion type="multiple" className="w-full" defaultValue={["Day-1", "Day-2", "Day-3"]}>
      {Object.entries(tripData).map(([day, landmarks]) => (
        <AccordionItem value={`Day-${day}`}>
          <AccordionTrigger>{`Day-${day}`}</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-1">
              {landmarks.map((landmark:LandmarkObject, index:number) => (
                <LandmarkCard data={landmark} key={index}/>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default LandmarkCardContainer;
