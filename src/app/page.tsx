import { Suspense } from "react";
import Header from "@/app/Header";
import SectionTodo from "@/components/modules/SectionTodo/SectionTodo";
import SectionTodoLoading from "@/components/modules/SectionTodo/SectionTodo.loading";

export default async function Home() {
  return (
    <div className="container overflow-hidden flex flex-col">
      <Header />
      <div className="w-100 py-2 h-100 overflow-auto">
        <Suspense fallback={<SectionTodoLoading />}>
          <SectionTodo />
        </Suspense>
      </div>
    </div>
  );
}
