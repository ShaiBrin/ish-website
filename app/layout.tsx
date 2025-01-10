import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./ui/page/navigation";
import WorkExpTimeline from "./ui/work/timeline";

export const metadata: Metadata = {
  title: "Ishraq Shabab",
  description: "Ishraq Shabab curated website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="w-full">
          <Navigation/>
        </div>
        <div className="pt-20"> 
          {children}
        </div>
      </body>
    </html>
  );
}
