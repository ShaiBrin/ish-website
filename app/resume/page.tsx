"use client"
import React from "react";
import PdfViewer from "../ui/resume";
import AnimatedPage from "../ui/animation";

const Resume = () => {
  return (
    <AnimatedPage>
    <div >
      <PdfViewer/>
    </div>
    </AnimatedPage>
  );
};
export default Resume;
