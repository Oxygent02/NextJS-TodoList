"use client";

import Header from "./Header";
import SectionTodo from "@/components/modules/SectionTodo/SectionTodo";

export default function Home() {
  return (
    <div className="container overflow-hidden flex flex-col">
      <Header />
      <div className="w-100 py-2 h-100 overflow-auto" style={{ scrollbarWidth: "thin" }}>
        <SectionTodo />
      </div>
    </div>
  );
}
