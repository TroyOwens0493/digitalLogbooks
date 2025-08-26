import type { Metadata } from "next";
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
        {children}
      </body>
    </html>
  );
}
