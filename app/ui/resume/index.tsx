"use client"
import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import Link from "next/link";

const PdfViewer= () => {
  return (
    <div className="md:pt-10 md:px-20">
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        <Viewer fileUrl={"/ish_resume.pdf"} />
      </Worker>
      <div className="mt-4 text-center">
        <Link
          href={"/ish_resume.pdf"}
          download="ish_resume.pdf"
          className="px-4 py-2 bg-white-500 text-black rounded-md hover:bg-blue-600 transition"
        >
          Download PDF
        </Link>
      </div>
    </div>
  );
};

export default PdfViewer;
