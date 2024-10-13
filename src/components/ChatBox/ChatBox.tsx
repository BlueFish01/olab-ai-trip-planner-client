import React from "react";
import {
  Card
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import TextBubble from "./TextBubble";
import { ScrollArea } from "@/components/ui/scroll-area"

export function ChatBox() {
  return (
    <div className="w-3/5">
      <Card className="flex flex-col h-full p-7 gap-3">
        <ScrollArea className="w-full h-full">
          <div className="flex flex-col gap-2">
          <TextBubble id="1" role="user" content="Hi, what is your name?" />
          <TextBubble id="3" role="user" content="Hi, what is your name? dfsdfsadfasdgasdfsd dfdssf dfsdfd dfsdf" />
          <TextBubble
            id="2"
            role="assistant"
            content="Lorem ipsum odor amet, consectetuer adipiscing elit. Tempor aliquet risus eleifend; semper finibus cras rutrum. Diam quisque nisl porta luctus quis conubia mus senectus. Condimentum litora efficitur fringilla ornare elit ipsum suscipit. Congue nec augue ex vitae himenaeos duis. Nisi ante cursus sit elit fringilla sagittis?

Auctor congue consectetur phasellus nunc magnis adipiscing. Senectus senectus lacinia interdum pulvinar non et neque. Efficitur ultricies nisl nunc donec nisi nec massa morbi congue. Ipsum pharetra convallis facilisis sapien venenatis, tortor conubia. Est curabitur taciti ac lorem scelerisque ut; nullam ex consectetur. Sit maximus ridiculus; sit diam inceptos nec aptent. Dis phasellus ultrices felis vivamus nam sollicitudin hendrerit. Adipiscing etiam nisi adipiscing lectus, feugiat primis.

Mollis laoreet id praesent leo eros quis efficitur. Ornare dolor fringilla a consectetur sollicitudin semper placerat ridiculus habitasse. Aliquam netus nullam quis egestas habitasse odio penatibus. Pretium ac nisl arcu phasellus, vestibulum enim pellentesque. Eros scelerisque tellus sodales lacinia volutpat quis nibh. Nunc morbi etiam mattis quis habitasse mattis malesuada amet. Donec gravida quam, condimentum tincidunt viverra at. Etiam aptent orci porta dictum volutpat iaculis rutrum in. Posuere lacus dictumst platea luctus ornare penatibus eu porta placerat.

Risus vestibulum cursus amet quam justo, urna phasellus imperdiet. Scelerisque non scelerisque mollis lorem ullamcorper porta praesent. Vulputate nunc porta aliquet dapibus sociosqu. Ante lacus diam, finibus lobortis taciti convallis. Mus natoque tempor enim vulputate imperdiet. Fames facilisi nostra inceptos porta potenti ridiculus; torquent etiam. Imperdiet molestie phasellus tempus curabitur etiam posuere. Ex natoque erat justo enim porttitor integer.

Cubilia at taciti vehicula rutrum maecenas ex. Urna parturient pellentesque vel aptent himenaeos curabitur. Aorci mauris maecenas quam ultricies mi imperdiet. Dis proin diam lacinia proin sit primis vehicula arcu. Etiam luctus commodo euismod dui molestie interdum nam nunc purus. Mauris proin sed habitant cubilia aptent parturient. Eros semper lacinia montes morbi cubilia dictum felis porttitor. Porta dolor ultrices volutpat scelerisque eleifend. Sem vehicula molestie sem risus taciti senectus dapibus. Consequat fames vehicula parturient mollis amet nisi, porttitor torquent."
          />
          </div>
        </ScrollArea>
        <div className="flex flex-row gap-2">
          <Input type="text" placeholder="Type your message..." />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
}
