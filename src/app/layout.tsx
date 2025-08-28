import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Logbooks",
  description: "Aircraft digital logbook application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-700 dark:text-gray-400">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
