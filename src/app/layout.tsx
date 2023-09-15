import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-family-open-sans",
});

export const metadata: Metadata = {
  title: "Cloud Drive",
  description:
    "Cloud Drive is an online file storage service for your files. Get organized with Cloud Drive",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.variable}>{children}</body>
    </html>
  );
}
