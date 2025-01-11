import LeftSide from "./ui/home/leftSide";
import RightSide from "./ui/home/rightSide";
import profileData from "../data/profileData.json"

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
        <div className="flex flex-grow pl-40  pt-10">
            <div className={`flex-initial md:w-2/5 pr-10 hidden md:block`}>
                <div className="w-full">
                    <LeftSide profile={profileData}/>
                </div>
            </div>
            <div className={`flex-initial md:w-3/5 pr-10 pl-20`}>
                <RightSide/>
            </div>
        </div>
    </div>
);
}
