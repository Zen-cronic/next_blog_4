import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

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
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />

        <main className="flex-grow">{children}</main>
        <Footer />
       
      </body>
    </html>
    </>
   
  );
}
