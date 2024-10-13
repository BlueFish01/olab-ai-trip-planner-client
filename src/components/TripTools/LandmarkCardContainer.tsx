import React, { ReactNode } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

interface LandmarkCardContainerProps {
    tripData: ReactNode[]
}
function LandmarkCardContainer({tripData}:LandmarkCardContainerProps) {

  return (
    <Accordion type="multiple" className="w-full" defaultValue={['Day-1']}>
      {tripData.map((element, index) =>  (
            <AccordionItem value={`Day-${index+1}`}>
            <AccordionTrigger>{`Day-${index+1}`}</AccordionTrigger>
            <AccordionContent>
              <div className='flex flex-col gap-1'>
                {element}
              </div>
            </AccordionContent>
          </AccordionItem>
        )
      )}
    </Accordion>

  )
}

export default LandmarkCardContainer