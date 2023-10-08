import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={` ${inter.className} bg-slate-800 text-slate-100 container mx-auto p-4`} style={{ width: "100vw", height: "100vh" }}>
        {children}
      </body>
    </html>
  );
}
