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
        <div className="w-full">
          <Navigation/>
        </div>
        <div className="pt-20 pb-20"> 
          {children}
        </div>
        <div className="hidden sm:block">
          <Footer/>
        </div>
      </body>
    </html>
  );
}