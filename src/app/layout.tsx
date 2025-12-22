import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import ReavelCoupon from "@/components/ReavelCoupon";
import Footer from "@/components/Footer";

const lexend = Lexend({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Top Shelf",
  description: "Best Weed Online Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} antialiased`}>
        <NavBar />
        {children}
        <ReavelCoupon />
        <Footer />
      </body>
    </html>
  );
}
