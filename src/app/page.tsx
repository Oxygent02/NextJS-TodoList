"use client";

import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/app/Header"), { ssr: false });
const SectionTodo = dynamic(() => import("@/components/modules/SectionTodo/SectionTodo"), { ssr: false });

export default function Home() {
  return (
    <div className="container overflow-hidden flex flex-col">
      <Header />
      <div className="w-100 py-2 h-100 overflow-auto">
        <SectionTodo />
      </div>
    </div>
  );
}
