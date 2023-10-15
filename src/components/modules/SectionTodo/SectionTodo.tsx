"use client";

import { ItemTodo } from "@/components/elements/ItemTodo/ItemTodo";
import { useEffect, useState } from "react";
import { getTodo } from "./actions/GetTodo";
import { updateStatusTodo } from "./actions/UpdateStatusTodo";
import { ItemTodoLoading } from "@/components/elements/ItemTodo/ItemTodo.loading";

export default function SectionTodo() {
  type Todo = {
    id: string;
    title: string;
    complete: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
  const [loading, setLoading] = useState<boolean>(true);
  const [todos, setTodo] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodo = async () => {
      const data = await getTodo();
      if (data) {
        setTodo(data);
      } else {
        console.error("Error fetching todo list.");
      }
      setLoading(false);
    };

    if (loading) {
      fetchTodo();
    }
  }, [loading]);

  const onHandleToogle = async (id: string, complete: boolean) => {
    await updateStatusTodo(id, complete);
  };

  return (
    <>
      {loading ? (
        <ul className="pl-4">
          {[...Array(10)].map((x, i) => (
            <ItemTodoLoading key={i} />
          ))}
        </ul>
      ) : (
        <ul className="pl-4">
          {todos.map((todo) => (
            <ItemTodo key={todo.id} {...todo} toogleTodo={onHandleToogle} />
          ))}
        </ul>
      )}
    </>
  );
}
