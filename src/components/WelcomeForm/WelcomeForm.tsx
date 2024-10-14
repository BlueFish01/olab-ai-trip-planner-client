'use client'

import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import DateRangePicker from "./DateRangePicker";
import { CityTagInput } from "./CityTagInput";
import { Label } from "@/components/ui/label";
import { DateRange } from "react-day-picker"
import { getNumberOfDays } from "@/lib/utils";
import { useDispatch } from "react-redux";
import { initTripAsync } from "@/lib/features/trip/tripSlice"
import { AppDispatch } from "@/lib/store";

function WelcomeForm() {
  const router = useRouter();
  
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  })

  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const payload = {
      city: ["Tokyo"],
      numberOfDay: getNumberOfDays(date?.from, date?.to),
      startDate: date?.from ?? new Date(),
      endDate: date?.to ?? new Date(),
    };
    await dispatch(initTripAsync(payload))
    router.push('/trip');;
    console.log("submit", payload);
  };
  return (
    <div className="flex h-full w-full py-8 justify-center items-center">
      <Card className="flex flex-col h-fit w-1/3">
        <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Hi, Welcome to OLAP</CardTitle>
          <CardDescription>Please fill your first infirmation</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Label>Trip date</Label>
          <DateRangePicker date={date} setDate={setDate}/>
          <Label>City</Label>
          <CityTagInput />
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Sent
          </Button>
        </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default WelcomeForm;
