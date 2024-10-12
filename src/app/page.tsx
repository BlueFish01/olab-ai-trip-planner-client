import {
  ChatBox
} from "@/components/ChatBox/ChatBox"
import { TripTools } from "@/components/TripTools/TripTools";

export default function Home() {
  return (
    <div className="main-container">
      <div className="m-auto flex flex-row gap-2 sm:w-5/6 w-full">
        <ChatBox />
        <TripTools />
      </div>
    </div>
  );
}
