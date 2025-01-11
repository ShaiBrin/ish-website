import React from "react";
import ContactForm from "../ui/contact/contactForm/email";
import socialData from "../../data/socialData.json"
import SocialsGrid from "../ui/contact/contacts/socials"
import { Social } from "../types/socialTypes";

export default function Contact() {
  return (
    <div className="flex flex-col lg:flex-row">
        <div className="px-8 lg:ml-40 lg:mr-80 pt-10 md:w-3/4  w-full lg:w-2/3">
            <ContactForm />
        </div>
        <div className="px-8 lg:ml-40 lg:mr-40 pt-14 w-full lg:w-1/2">
            <SocialsGrid socials={socialData as Social[]} />
        </div>
    </div>
  );
}