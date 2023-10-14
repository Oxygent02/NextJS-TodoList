import { ItemTodoLoading } from "@/components/elements/ItemTodo/ItemTodo.loading";

export default async function SectionTodoLoading() {
  return (
    <>
      <ul className="pl-4">
        {[...Array(100)].map((x, i) => (
          <ItemTodoLoading key={i} />
        ))}
      </ul>
    </>
  );
}
