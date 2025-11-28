import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CS CUP Junior 2025",
  description: "The premier programming competition for junior developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}