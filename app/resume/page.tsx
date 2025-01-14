"use client"
import React from "react";
import PdfViewer from "../ui/resume";
import AnimatedPage from "../ui/animation";
import Link from "next/link";

const Resume = () => {
  return (
    <AnimatedPage>
    <div className="relative">
      <div className="flex justify-center mt-4">
        <Link
          href={"/ish_resume.pdf"}
          download="ish_resume.pdf"
          className="px-4 bg-white-500 text-black rounded-md hover:bg-blue-100 transition"
        >
          Download PDF
        </Link>
      </div>
      <div className="pt-5 px-4">
        <PdfViewer />
      </div>
    </div>
  </AnimatedPage>
  );
};
export default Resume;
