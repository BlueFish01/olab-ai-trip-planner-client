import React from "react";
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

function WelcomeForm() {
  return (
    <div className="flex h-full w-full py-8 justify-center items-center">
      <Card className="flex flex-col h-fit w-1/3">
        <CardHeader>
          <CardTitle>Hi, Welcome to OLAP</CardTitle>
          <CardDescription>Please fill your first infirmation</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Label>Trip date</Label>
          <DateRangePicker />
          <Label>City</Label>
          <CityTagInput />
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Sent
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default WelcomeForm;
