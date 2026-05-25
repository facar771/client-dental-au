import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrightSmile Dental | Family Dentist in Sydney, NSW",
  description:
    "Gentle, modern dental care for the whole family in Surry Hills, Sydney. Book your appointment today — new patients welcome.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
