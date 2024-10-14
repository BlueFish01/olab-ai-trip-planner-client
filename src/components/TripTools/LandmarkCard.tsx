import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { LandmarkObject } from "@/lib/features/trip/tripSlice";

function LandmarkCard({data}:{data:LandmarkObject}) {
  return (
    <Card className="w-11/12 self-end">
        <CardContent className="p-0 flex flex-row justify-between">
            <div className="p-2 flex flex-col gap-1">
                <CardTitle className="text-xl">{data.name}</CardTitle>
                <CardDescription>{data.description}</CardDescription>
            </div>
            <div className="relative w-24 h-24 rounded-r-lg overflow-hidden self-end">
                <Image
                    src={data.imageUrl[0] ?? ''}
                    alt={`Picture of the ${data.name}`}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
        </CardContent>
    </Card>
  );
}

export default LandmarkCard;
