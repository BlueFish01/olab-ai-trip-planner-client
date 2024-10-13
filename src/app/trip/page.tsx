import {
    ChatBox
  } from "@/components/ChatBox/ChatBox"
  import { TripTools } from "@/components/TripTools/TripTools";
  
  export default function Trip() {
    return (
      <div className="main-container">
        <div className="py-8 flex flex-row gap-2 sm:w-5/6 w-full h-full bg-zinc-50">
          <ChatBox />
          <TripTools />
        </div>
      </div>
    );
  }