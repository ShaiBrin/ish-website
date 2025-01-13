"use client";
import { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import socialData from "../../../../data/socialData.json"
import linksData from "../../../../data/linksData.json"
import { Social } from "@/app/types/socialTypes";
import { Links } from "@/app/types/linkTypes";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar  links={linksData as Links} socials={socialData as Social[]} isOpen={isOpen} toggle={toggle} />
      <Navbar links={linksData as Links} socials={socialData as Social[]} isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default Navigation;
