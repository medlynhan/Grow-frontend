
'use client'
import "./globals.css";
import Navbar from "./components/Navbar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="md:text-base">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
