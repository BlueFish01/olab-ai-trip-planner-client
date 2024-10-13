import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";

function LandmarkCard() {
  return (
    <Card className="w-11/12 self-end">
        <CardContent className="p-0 flex flex-row justify-between">
            <div className="p-2 flex flex-col gap-1">
                <CardTitle className="text-xl">Tokyo</CardTitle>
                <CardDescription>This is tokyo land of sushi</CardDescription>
            </div>
            <div className="relative w-24 h-24 rounded-r-lg overflow-hidden self-end">
                <Image
                    src="https://offbeatjapan.com/wp-content/uploads/2011/10/tokyo-tower-night-landmark-1200x800.jpg"
                    alt="Picture of the author"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
        </CardContent>
    </Card>
  );
}

export default LandmarkCard;
