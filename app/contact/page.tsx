import React from "react";
import ContactForm from "../ui/contact/contactForm/email";
import socialData from "../../data/socialData.json"
import Socials from "../ui/contact/contacts/socials"
import { Social } from "../types/socialTypes";

export default function Contact() {
  return (
    <div className="flex">
        <div className="ml-40 mr-80 pt-10">
            <ContactForm />
        </div>
        <div className="ml-40 w-1/2 pt-14">
            <Socials socials={socialData as Social[] } />
        </div>
    </div>
  );
}