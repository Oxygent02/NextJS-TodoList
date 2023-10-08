import { prisma } from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Create() {
  const createTodo = async (data: FormData) => {
    "use server";

    const title = data.get("title")?.valueOf();
    if (typeof title !== "string" || title.length === 0) {
      throw new Error("Please use informable title");
    }

    await prisma.todo.create({
      data: { title, complete: false },
    });
    redirect("/");
    return true;
  };
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New Task</h1>
      </header>
      <form action={createTodo} className="flex gap-2 flex-col">
        <input type="text" name="title" className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100" placeholder="Let's finish our job!" />
        <div className="flex gap-1 justify-end">
          <Link href=".." className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">
            Cancel
          </Link>
          <button type="submit" className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">
            Create
          </button>
        </div>
      </form>
    </>
  );
}
