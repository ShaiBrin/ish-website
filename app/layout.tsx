import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./page/navigation";

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
          <Navigation />
        </div>
        {children}
      </body>
    </html>
  );
}
