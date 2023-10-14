import { ItemTodo } from "@/components/elements/ItemTodo/ItemTodo";
import { prisma } from "@/db";

export default async function SectionTodo() {
  const getTodos = async () => {
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

  const todos = await getTodos();

  return (
    <>
      <ul className="pl-4">
        {todos.map((todo) => (
          <ItemTodo key={todo.id} {...todo} toogleTodo={onHandleToogle} />
        ))}
      </ul>
    </>
  );
}
