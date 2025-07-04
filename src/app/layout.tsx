import { Suspense } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from 'next/script'
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kaung Zin Hein",
  description: "Portfolio of Kaung Zin Hein",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <Script defer src={"https://plausible.io/js/script.hash.js"} data-domain={'kaungzinhein.me'}/>
        <body className={`${inter.className} flex flex-col min-h-screen`}>
          <SpeedInsights />
          <Suspense>
            <Navbar />

            <main className="flex-grow">{children}</main>
            <Footer />
          </Suspense>
        </body>
      </html>
    </>
  );
}
