
import profileData from "../data/profileData.json"
import AnimatedPage from "./ui/animation";
import Introsection from "./ui/introsection";
import Profilesection from "./ui/profilesection";
import Techstack from "./ui/techstack";
export default function Home() {
  return (
    <AnimatedPage>
    <div className="flex  pt-10  pl-10 pr-10">
      <div className="flex-row md:flex-row">
        <div className="flex flex-col  md:flex-row pb-10">
          <div className="md:w-2/5 order-2 md:order-1">
            <Introsection profile={profileData} />
          </div>
          <div className="md:w-3/5 md:pl-40 order-1 md:order-2 sm:pb-10">
            <Profilesection />
          </div>
        </div>
        <div>
          <Techstack/>
        </div>
      </div>
    </div>
    </AnimatedPage>
);
}
