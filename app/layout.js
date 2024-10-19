import {Inter } from "next/font/google"
import "./globals.css";
import Header from "@/components/header";


const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Schedulo",
  description: "Meeting Scheduling App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ inter.className}>
        <Header  />
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">{children}</main>
        <footer className="bg-blue-100 py-12">
          <div className=" container mx-auto px-4 text-center text-gray-600">
            <p>
              Made with 🩵 by Praveen Tiwari
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
