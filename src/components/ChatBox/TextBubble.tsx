import React from 'react'
import { Card, CardContent } from '../ui/card'

interface TextBubbleProps {
    role: "user" | "assistant" | "system" | "tool"
    content: string
    id: string
}
function TextBubble({role, content, id}:TextBubbleProps) {
    switch (role) {
        case "user":
          return (
            <Card key={id} className="bg-primary text-primary-foreground text-balance w-11/12 max-w-fit self-end overflow-hidden">
              <CardContent className="p-4 text-balance">
                {content}
              </CardContent>
            </Card>
          );
        case "assistant":
          return (
            <Card key={id} className="bg-secondary text-secondary-foreground text-balance w-11/12 max-w-fit self-start overflow-hidden">
              <CardContent className="p-4" >
                {content}
              </CardContent>
            </Card>
          );
        default:
          return null;
      }
}

export default TextBubble