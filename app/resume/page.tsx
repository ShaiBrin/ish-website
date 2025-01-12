"use client"
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf';

export default function ResumePage() {
    
  return (
    <div className="flex justify-center items-center pt-10">
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js">
        <Viewer fileUrl="/Ishraq.pdf" />
      </Worker>
    </div>
  );
}
