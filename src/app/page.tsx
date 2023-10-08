import { prisma } from "@/db";
import { TodoItem } from "@/components/TodoItem";
import Link from "next/link";
import { redirect } from "next/navigation";

const getTodos = () => {
  return prisma.todo.findMany();
};

const onHandleToogle = async (id: string, complete: boolean) => {
  "use server";
  return await prisma.todo.update({
    data: {
      complete,
    },
    where: {
      id,
    },
  });
};

export default async function Home() {
  const todos = await getTodos();
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todo List</h1>
        <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href={`/new`}>
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toogleTodo={onHandleToogle} />
        ))}
      </ul>
    </>
  );
}
