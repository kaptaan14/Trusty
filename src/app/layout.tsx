import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Trusty",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary text-white ">
        <div className="max-w-screen-xl mx-auto">
          <Navbar />
          <main className="flex flex-col justify-center items-center">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
