import "./globals.css";
import type { Metadata } from "next";
import Navigation from "./ui/page/navigation";
import socialData from "../data/socialData.json"
import Footer from "./ui/page/footer";
import { Social } from "./types/socialTypes";

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
        <div className="pt-20 pb-20"> 
          {children}
        </div>
        <div className="hidden sm:block">
          <Footer socials={socialData as Social[]} />
        </div>
      </body>
    </html>
  );
}