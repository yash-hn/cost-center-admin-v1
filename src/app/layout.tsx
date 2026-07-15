import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cost Center Admin Dashboard",
  description: "Track and analyze AI usage costs and token consumption",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}