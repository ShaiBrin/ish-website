import IntroSide from "./ui/home/IntroSection";
import ProfileSide from "./ui/home/ProfileSection";
import profileData from "../data/profileData.json"
import { Email } from "@mui/icons-material";
import ContactForm from "./ui/contact/contactForm/email";
import ResponsiveStack from "./ui/home/techStack";
import prog from "../data/progData.json"
import tools from "../data/toolsData.json"
import frameworks from "../data/frameworksData.json"
import database from "../data/databaseData.json"
import { Tech } from "./types/progTypes";
export default function Home() {
  return (
    <div className="flex md:pl-20 pt-10 px-4">
      <div className="flex-row md:flex-row">
        <div className={`flex flex-col pt-4 md:flex-row`}>
          <div className={`md:w-2/5 order-2 md:order-1`}>
            <IntroSide profile={profileData} />
          </div>
          <div className={`md:w-3/5 md:pl-40 order-1 md:order-2`}>
            <ProfileSide />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8">
          <div className="flex flex-col pt-4 pb-5">
          <ResponsiveStack prog={prog as Tech[]} text={"Languages"}  />
          </div>
          <div className="flex flex-col pt-4 pb-5">
          <ResponsiveStack prog={frameworks as Tech[]} text={"Frameworks & Libraries"}  />
          </div>
          <div className="flex flex-col pt-4 pb-5">
          <ResponsiveStack prog={database as Tech[]} text={"Database"}  />
          </div>
          <div className="flex flex-col pt-4 pb-5">
            <ResponsiveStack prog={tools as Tech[]} text={"Tools"}  />
          </div>
        </div>
      </div>
    </div>
);
}
