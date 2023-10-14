import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App App",
  description: "Simple Todo List App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-slate-800 text-slate-100 container mx-auto p-4 w-screen h-screen max-w-screen max-h-screen overflow-hidden flex`}>{children}</body>
    </html>
  );
}
