import "./globals.css";
import type { Metadata } from "next";
import Navigation from "./ui/page/navigation";
import Footer from "./ui/page/footer";

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
        <div className="w-full pl-5">
          <Navigation/>
        </div>
        <div className="pt-24 pb-20"> 
          {children}
        </div>
        <div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}