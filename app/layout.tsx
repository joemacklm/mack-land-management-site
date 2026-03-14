import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mack Land Management",
  description: "Professional land clearing and stump grinding services.",
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